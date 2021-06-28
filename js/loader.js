const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const sol = document.querySelector('.sol');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        sol.style.opacity = 0;
        sol.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);
    }, 4000);
}

init();