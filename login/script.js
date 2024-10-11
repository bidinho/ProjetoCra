document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o comportamento padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação simples de login (exemplo com dados estáticos)
    if (username === "admin" && password === "1234") {
        document.getElementById('message').textContent = "Login bem-sucedido!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = "Usuário ou senha incorretos!";
    }
});
