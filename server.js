const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs'); // Para hash de senhas
const cors = require('cors');     // Para permitir comunicação entre frontend e backend

const app = express();
const porta = 3000;

// Configura o CORS para permitir requisições do seu frontend
app.use(cors());
// Middleware para analisar corpos de requisição JSON
app.use(express.json());

// Conecta ao banco de dados SQLite (ou o cria se não existir)
const db = new sqlite3.Database('./usuarios.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        // Cria a tabela 'users' se ela não existir
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Erro ao criar a tabela:', err.message);
            } else {
                console.log('Tabela "usuarios" criada ou já existe.');
            }
        });
    }
});

// --- Endpoint de Registro ---
app.post('/registrar', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Gera o hash da senha antes de armazená-la no banco
        const senhaHash = await bcrypt.hash(senha, 10); // 10 é o número de 'salt rounds' (complexidade)

        const stmt = db.prepare('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)');
        stmt.run(nome, email, senhaHash, function(err) {
            if (err) {
                // Se o e-mail já existe (restrição UNIQUE)
                if (err.message.includes('UNIQUE constraint failed: users.email')) {
                    return res.status(409).json({ mensagem: 'E-mail já cadastrado.' });
                }
                console.error('Erro ao inserir usuário:', err.message);
                return res.status(500).json({ mensagem: 'Erro ao registrar usuário.' });
            }
            res.status(201).json({ mensagem: 'Usuário registrado com sucesso!', userId: this.lastID });
        });
        stmt.finalize(); // Finaliza a instrução preparada
    } catch (error) {
        console.error('Erro durante o hash da senha:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
});

// --- Endpoint de Login ---
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ mensagem: 'E-mail e senha são obrigatórios.' });
    }

    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, usuario) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err.message);
            return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
        if (!usuario) {
            return res.status(401).json({ mensagem: 'E-mail ou senha inválidos.' });
        }

        // Compara a senha fornecida com o hash armazenado no banco
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (senhaCorreta) {
            // Em uma aplicação real, você geraria um JWT (JSON Web Token) aqui
            // e o enviaria de volta para o cliente para autenticar futuras requisições.
            res.status(200).json({ mensagem: 'Login bem-sucedido!', usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } });
        } else {
            res.status(401).json({ mensagem: 'E-mail ou senha inválidos.' });
        }
    });
});

// --- Rota Protegida (Exemplo) ---
// Em uma aplicação real, você usaria middleware para verificar tokens JWT aqui.
app.get('/dashboard', (req, res) => {
    res.status(200).json({ mensagem: 'Bem-vindo ao Dashboard! Você está logado.' });
});

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});