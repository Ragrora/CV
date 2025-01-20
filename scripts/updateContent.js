async function loadPage(event, page) {
    if (event) event.preventDefault(); // Impede o comportamento padrão do link

    const contentDiv = document.querySelector('.pagePanel'); // Painel de conteúdo
    const savedLanguage = localStorage.getItem("language") || "pt-br";

    // Define o root do site
    const root = '/CV';

    try {
        // Faz a requisição para carregar o conteúdo da página
        const response = await fetch(`${root}/pages/${page}.html`);
        if (!response.ok) throw new Error('Erro ao carregar a página');

        const html = await response.text();
        contentDiv.innerHTML = html; // Atualiza o conteúdo do painel direito

        // Atualiza o idioma do conteúdo carregado
        changeLanguage(savedLanguage);

        // Atualiza a URL no navegador
        window.history.pushState({}, '', `${root}/${page}`);
    } catch (error) {
        console.error(error);
        contentDiv.innerHTML = '<p>Erro ao carregar a página.</p>';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Define o root do site
    const root = '/CV';

    // Determina a página inicial com base na URL
    const initialPath = window.location.pathname.replace(root, '') || '/';
    const initialPage = initialPath === '/' || initialPath === '/index.html' ? 'home' : initialPath.substring(1);

    loadPage({ preventDefault: () => {} }, initialPage); // Carrega a página inicial ou a página atual da URL
});
