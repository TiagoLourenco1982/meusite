document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuWidth = menu.offsetWidth;
    var menuBtn = document.getElementById('menu-btn');
    if (menu.style.left === '0px') {
        menu.style.left = `-${menuWidth}px`;
        menuBtn.style.left = '15px'; // Movendo o botão para a posição inicial
    } else {
        menu.style.left = '0';
        menuBtn.style.left = `${menuWidth -20}px`; // Movendo o botão para a posição do menu
    }
});
