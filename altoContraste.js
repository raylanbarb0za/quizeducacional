document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o botão já existe na página
    if (!document.getElementById("toggle-contrast")) {
        const button = document.createElement("button");
        button.id = "toggle-contrast";
        button.setAttribute("aria-label", "Ativar ou desativar alto contraste");
        button.style.position = "fixed";
        button.style.top = "10px";
        button.style.right = "10px";
        button.style.zIndex = "1000";
        button.style.padding = "10px";
        button.style.borderRadius = "5px";
        button.style.border = "none";
        button.style.backgroundColor = "#333";
        button.style.color = "#fff";
        button.style.cursor = "pointer";
        document.body.appendChild(button);
    }

    const btn = document.getElementById("toggle-contrast");

    // Aplica o alto contraste se estiver ativado no localStorage
    if (localStorage.getItem("highContrast") === "true") {
        document.body.classList.add("high-contrast");
    }

    // Define o texto do botão de acordo com o estado atual
    btn.textContent = document.body.classList.contains("high-contrast")
        ? "Remover Alto Contraste"
        : "Ativar Alto Contraste";

    // Alterna o modo de contraste ao clicar
    btn.addEventListener("click", function () {
        document.body.classList.toggle("high-contrast");
        const isActive = document.body.classList.contains("high-contrast");
        localStorage.setItem("highContrast", isActive);
        btn.textContent = isActive
            ? "Desativar Alto Contraste"
            : "Ativar Alto Contraste";
    });
});
