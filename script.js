document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuWidth = menu.offsetWidth;
    var menuBtn = document.getElementById('menu-btn');
    var mainContent = document.querySelector('main');

    if (menu.style.left === '0px' || menu.style.left === '') {
        menu.style.left = `-${menuWidth}px`;
        menuBtn.style.left = '20px'; // Movendo o botão para a posição inicial
        mainContent.classList.remove('main-expanded'); // Removendo a classe main-expanded quando o menu é recolhido
    } else {
        menu.style.left = '15px'; // Definindo a posição do menu para 15 pixels da margem esquerda
        menuBtn.style.left = `${menuWidth - 20}px`; // Movendo o botão para a posição do menu
        mainContent.classList.add('main-expanded'); // Adicionando a classe main-expanded quando o menu é expandido
    }
});
