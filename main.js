document.addEventListener("DOMContentLoaded", function() {
    const btnEntrar = document.getElementById("btn-entrar");

    btnEntrar.addEventListener("click", function() {
        const nome = document.getElementById("username").value.trim();
        if (!nome) {
            alert("Digite seu nome!");
            return;
        }

        // Salva nome e cria progresso se não existir
        localStorage.setItem("quizUser", nome);
        if (!localStorage.getItem("progresso")) {
            localStorage.setItem("progresso", JSON.stringify({ niveis: {}, conquistas: [] }));
        }

        // Redireciona para a página de níveis
        window.location.href = "iniciante.html";
    });
});
function carregarMenuNiveis() {
    const container = document.getElementById('niveis');
    if (!container) return;

    const progresso = JSON.parse(localStorage.getItem("progresso"))?.niveis || {};
    container.innerHTML = ""; // Limpa antes de criar

    for (let i = 1; i <= 12; i++) {
        const btn = document.createElement('button');
        btn.className = "nivel-btn";
        btn.textContent = `Nível ${i} ${progresso[`nivel${i}`] ? "✅" : ""}`;
        btn.onclick = () => window.location.href = `aulas/nivel${i}.html`;
        container.appendChild(btn);
    }

    // Mostra o nome do usuário
    const nome = localStorage.getItem("quizUser") || "Aluno";
    const welcomeEl = document.getElementById('welcome');
    if (welcomeEl) welcomeEl.textContent = `Olá, ${nome}!`;
}
