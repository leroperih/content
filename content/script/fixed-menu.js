
const main = document.querySelector('main.menu-and-content');
const menu = document.querySelector('div.search-menu-section > div');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY || window.pageYOffset;

    // Garante que ambos os elementos existem na página antes de executar
    if (menu && main) {
        // Usa getComputedStyle para ler a propriedade flexDirection real (vinda do CSS)
        const estiloMain = window.getComputedStyle(main);

        if (estiloMain.flexDirection === 'row-reverse') {
            menu.style.transform = `translateY(${scrolled}px)`;
        }
    }
});