// Lógica para o formulário de Login
    const formularioLogin = document.getElementById('formularioLogin');
    if (formularioLogin) {
        formularioLogin.addEventListener('submit', async (event) => {
            event.preventDefault(); // Evita o recarregamento da página

            const email = document.getElementById('emailLogin').value; // Usar ID específico para login
            const senha = document.getElementById('senhaLogin').value; // Usar ID específico para login

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, senha })
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message + ` Bem-vindo, ${data.user.nome}!`);
                    // Redirecionar para uma página de sucesso ou dashboard
                    window.location.href = 'index.html'; // Exemplo: redirecionar para a página inicial
                } else {
                    alert(`Erro no login: ${data.message}`);
                }
            } catch (error) {
                console.error('Erro ao enviar dados de login:', error);
                alert('Erro ao conectar com o servidor. Tente novamente.');
            }
        });
    }
