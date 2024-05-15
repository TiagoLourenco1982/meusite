document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuWidth = menu.offsetWidth;
    var menuBtn = document.getElementById('menu-btn');
    var mainContent = document.querySelector('main');

    if (menu.style.left === '0px') {
        menu.style.left = `-${menuWidth}px`;
        menuBtn.style.left = '20px'; // Movendo o botão para a posição inicial
        mainContent.style.marginLeft = '20px'; // Ajuste da margem do conteúdo principal
    } else {
        menu.style.left = '20';
        menuBtn.style.left = `${menuWidth - 10}px`; // Movendo o botão para a posição do menu
        mainContent.style.marginLeft = `${menuWidth}px`; // Ajuste da margem do conteúdo principal
    }
});
