document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuWidth = menu.offsetWidth;
    var menuBtn = document.getElementById('menu-btn');
    var mainContent = document.querySelector('main');
    var sidebar = document.querySelector('.sidebar');

    if (menu.style.left === '0px' || menu.style.left === '') {
        menu.style.left = `-${menuWidth}px`;
        menuBtn.style.left = '13px'; // Movendo o botão para a posição inicial
        mainContent.style.marginLeft = '0'; // Resetando a margem esquerda do main
        sidebar.style.marginLeft = '0'; // Recuando o sidebar para a posição original
    } else {
        menu.style.left = '0';
        menuBtn.style.left = `${menuWidth + 13}px`; // Movendo o botão para a posição do menu
        mainContent.style.marginLeft = `${menuWidth}px`; // Ajustando a margem esquerda do main
        sidebar.style.marginLeft = `${menuWidth + 2}%`; // Ajustando a margem esquerda do sidebar
    }
});
