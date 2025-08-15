function checkAchievements() {
    let progresso = JSON.parse(localStorage.getItem("progresso"));
    let conquistas = progresso.conquistas;

    const niveisConcluidos = Object.keys(progresso.niveis).length;

    if (!conquistas.includes("primeiro_quiz") && niveisConcluidos >= 1) {
        conquistas.push("primeiro_quiz");
        alert("🏆 Conquista desbloqueada: Primeiro Quiz!");
    }
    if (!conquistas.includes("5_niveis") && niveisConcluidos >= 5) {
        conquistas.push("5_niveis");
        alert("🏆 Conquista desbloqueada: 5 Níveis Concluídos!");
    }
    if (!conquistas.includes("10_niveis") && niveisConcluidos >= 10) {
        conquistas.push("10_niveis");
        alert("🏆 Conquista desbloqueada: Mestre dos Iniciantes!");
    }

    progresso.conquistas = conquistas;
    localStorage.setItem("progresso", JSON.stringify(progresso));
}
