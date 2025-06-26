const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcrypt'); // Importe o bcrypt

const app = express();
const port = 3000;

// Conectar ao banco de dados SQLite
const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        // Criar a tabela de usuários se não existir
        db.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        )`, (createTableErr) => {
            if (createTableErr) {
                console.error('Erro ao criar a tabela de usuários:', createTableErr.message);
            } else {
                console.log('Tabela de usuários verificada/criada.');
            }
        });
    }
});

// Middleware para processar JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para o cadastro de usuários
app.post('/cadastro', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Gerar o hash da senha
        const hashedPassword = await bcrypt.hash(senha, 10); // O '10' é o custo do salt (quanto maior, mais seguro, mas mais lento)

        const stmt = db.prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
        stmt.run(nome, email, hashedPassword, function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(409).json({ message: 'E-mail já cadastrado.' });
                }
                console.error('Erro ao inserir usuário:', err.message);
                return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
            }
            res.status(201).json({ message: 'Usuário cadastrado com sucesso!', userId: this.lastID });
        });
        stmt.finalize();
    } catch (error) {
        console.error('Erro ao gerar hash da senha:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});

// Rota para o login de usuários
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
    }

    db.get("SELECT * FROM usuarios WHERE email = ?", [email], async (err, user) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err.message);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
        if (!user) {
            return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
        }

        try {
            // Comparar a senha fornecida com o hash salvo
            const match = await bcrypt.compare(senha, user.senha);

            if (match) {
                res.status(200).json({ message: 'Login bem-sucedido!', user: { id: user.id, nome: user.nome, email: user.email } });
            } else {
                res.status(401).json({ message: 'E-mail ou senha inválidos.' });
            }
        } catch (error) {
            console.error('Erro ao comparar senhas:', error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});