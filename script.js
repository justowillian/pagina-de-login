const EMAIL_CORRETO = "Jw12@gmail.com";
const SENHA_CORRETA = "'jw12345'";

function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (email === EMAIL_CORRETO && senha === SENHA_CORRETA) {
        mensagem.style.color = "green";
        mensagem.textContent = "Login realizado com sucesso!";
        setTimeout(() => {
            window.location.href = "home.html"; 
        }, 1000);
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Email ou senha incorretos.";
    }
}
