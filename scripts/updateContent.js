async function loadPage(event, page) {
    if (event) event.preventDefault(); // Impede o comportamento padrão do link

    const contentDiv = document.querySelector('.pagePanel'); // Painel de conteúdo
    const savedLanguage = localStorage.getItem("language") || "pt-br";

    try {
        // Faz a requisição para carregar o conteúdo da página
        const response = await fetch(`/pages/${page}.html`);
        if (!response.ok) throw new Error('Erro ao carregar a página');

        const html = await response.text();
        contentDiv.innerHTML = html; // Atualiza o conteúdo do painel direito

        // Atualiza o idioma do conteúdo carregado
        changeLanguage(savedLanguage);

        // Atualiza a URL no navegador
        window.history.pushState({}, '', `/${page}`);
    } catch (error) {
        console.error(error);
        contentDiv.innerHTML = '<p>11 Erro ao carregar a página.</p>';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Se a página inicial for carregada, defina como "home"
    const initialPage = window.location.pathname === "/" || window.location.pathname === "/index.html" ? "home" : window.location.pathname.substring(1);
    
    loadPage({ preventDefault: () => {} }, initialPage); // Carrega a página inicial ou a página atual da URL
});

