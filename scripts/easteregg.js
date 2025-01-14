let timer;
let numeroDeCliques = 0;

const container = document.querySelector('.easteregg')

function resetContador() {
    numeroDeCliques = 0;
    clearTimeout(timer);
}

document.addEventListener('click', () => {
    numeroDeCliques++;

    clearTimeout(timer);

    timer = setTimeout(resetContador, 3000);

    if (numeroDeCliques === 10) {
        container.style.display = 'block';
        container.scrollIntoView({behavior: 'smooth'})
    }
});