 document.getElementById('formularioLogin').addEventListener('submit', async function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            try {
                // Envia os dados de login para o seu backend
                const resposta = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, senha })
                });

                const dados = await resposta.json(); // Pega a resposta do servidor

                if (resposta.ok) {
                    alert(dados.mensagem);
                    // Em uma aplicação real, você armazenaria um token de autenticação (JWT) aqui
                    window.location.href = 'dashboard.html'; // Redireciona para uma página protegida
                } else {
                    alert(dados.mensagem); // Mostra erro do servidor
                }
            } catch (erro) {
                console.error('Erro ao fazer login:', erro);
                alert('Ocorreu um erro ao fazer login. Tente novamente.');
            }
        });