let burger = document.querySelector('.burger'),
    touch = document.querySelector('.burger-touch'),
    main = document.querySelector('main'),
    footer = document.querySelector('footer'),
    menu = document.querySelector('.mobail-menu'),
    pages = document.querySelector('.pages');

burger.addEventListener('click', () => {
    touch.style.display = 'flex';
    menu.style.display = 'flex';
    burger.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
});

touch.addEventListener('click', () => {
    burger.style.display = 'flex';
    main.style.display = 'flex';
    footer.style.display = 'flex';
    touch.style.display = 'none';
    menu.style.display = 'none';
});

pages.addEventListener('click', () => {
    burger.style.display = 'flex';
    main.style.display = 'flex';
    footer.style.display = 'flex';
    touch.style.display = 'none';
    menu.style.display = 'none';
})
