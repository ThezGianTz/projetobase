document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o formulário de Cadastro
    const cadastroForm = document.getElementById('formularioRegistro');
    if (formularioRegistro) {
        formularioRegistro.addEventListener('submit', async (event) => {
            event.preventDefault(); // Evita o recarregamento da página

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value; // Pegar a senha

            try {
                const response = await fetch('/cadastro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nome, email, senha })
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                    cadastroForm.reset(); // Limpa o formulário após o sucesso
                } else {
                    alert(`Erro no cadastro: ${data.message}`);
                }
            } catch (error) {
                console.error('Erro ao enviar dados de cadastro:', error);
                alert('Erro ao conectar com o servidor. Tente novamente.');
            }
        });
    }
})
    