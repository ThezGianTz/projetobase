  document.getElementById('formularioRegistro').addEventListener('submit', async function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            try {
                // Envia os dados para o seu backend (servidor)
                const resposta = await fetch('http://localhost:3000/cadastro.html', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nome, email, senha })
                });

                const dados = await resposta.json(); // Pega a resposta do servidor

                if (resposta.ok) {
                    alert(dados.mensagem);
                    window.location.href = 'login.html'; // Redireciona para a página de login
                } else {
                    alert(dados.mensagem); // Mostra erro do servidor
                }
            } catch (erro) {
                console.error('Erro ao registrar:', erro);
                alert('Ocorreu um erro ao registrar. Tente novamente.');
            }
        });