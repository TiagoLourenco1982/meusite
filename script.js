document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuWidth = menu.offsetWidth;
    var menuBtn = document.getElementById('menu-btn');
    var mainContent = document.querySelector('main');
    var sidebar = document.querySelector('.sidebar');

    if (menu.style.left === '0px' || menu.style.left === '') {
        menu.style.left = `-${menuWidth}px`;
        mainContent.style.marginLeft = '0'; // Resetar a margem do conteúdo principal
        sidebar.style.marginRight = '0'; // Resetar a margem do sidebar
    } else {
        menu.style.left = '0';
        mainContent.style.marginLeft = `${menuWidth}px`; // Ajustar a margem do conteúdo principal
        sidebar.style.marginRight = `${menuWidth}px`; // Ajustar a margem do sidebar
    }
});
