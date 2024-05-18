document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var menuBtn = document.getElementById('menu-btn');
    var mainContent = document.querySelector('main');
    var sidebar = document.querySelector('.sidebar');
// Remova ou comente todo o código JavaScript que lida com o menu
// document.addEventListener('DOMContentLoaded', function() {
//     var menu = document.getElementById('menu');
//     var menuBtn = document.getElementById('menu-btn');
//     var mainContent = document.querySelector('main');
//     var sidebar = document.querySelector('.sidebar');

//     // Define a posição inicial do menu
//     menu.style.left = '-80%'; // 100% - 20% (visível)
//     mainContent.style.maxWidth = 'calc(100% - 20px)'; // Largura máxima do main quando o menu estiver recolhido

//     menuBtn.addEventListener('click', function() {
//         var menuWidth = menu.offsetWidth;

//         if (menu.style.left === '0px') {
//             menu.style.left = `-${menuWidth - 20}px`; // Menu parcialmente escondido com 20px visíveis
//             menuBtn.style.left = '20px'; // Posição inicial do botão
//             mainContent.style.maxWidth = 'calc(100% - 20px)'; // Largura máxima do main quando o menu estiver recolhido
//             mainContent.style.marginLeft = '20px'; // Ajusta a margem esquerda do main
//             sidebar.style.marginLeft = 'calc(20px + 2%)'; // Ajusta a margem esquerda do sidebar
//             mainContent.classList.remove('main-expanded'); // Remove a classe main-expanded quando o menu é recolhido
//         } else {
//             menu.style.left = '0';
//             menuBtn.style.left = `${menuWidth}px`; // Movendo o botão para a posição do menu
//             mainContent.style.maxWidth = `calc(100% - ${menuWidth}px)`; // Ajusta a largura máxima do main
//             mainContent.style.marginLeft = `${menuWidth}px`; // Ajustando a margem esquerda do main
//             sidebar.style.marginLeft = 'calc(2% + ' + menuWidth + 'px)'; // Ajustando a margem esquerda do sidebar
//             mainContent.classList.add('main-expanded'); // Adicionando a classe main-expanded quando o menu é expandido
//         }
//     });
// });

    // Define a posição inicial do menu
    menu.style.left = '-80%'; // 100% - 20% (visível)
    mainContent.style.maxWidth = 'calc(100% - 20px)'; // Largura máxima do main quando o menu estiver recolhido

    menuBtn.addEventListener('click', function() {
        var menuWidth = menu.offsetWidth;

        if (menu.style.left === '0px') {
            menu.style.left = `-${menuWidth - 20}px`; // Menu parcialmente escondido com 20px visíveis
            menuBtn.style.left = '20px'; // Posição inicial do botão
            mainContent.style.maxWidth = 'calc(100% - 20px)'; // Largura máxima do main quando o menu estiver recolhido
            mainContent.style.marginLeft = '20px'; // Ajusta a margem esquerda do main
            sidebar.style.marginLeft = 'calc(20px + 2%)'; // Ajusta a margem esquerda do sidebar
            mainContent.classList.remove('main-expanded'); // Remove a classe main-expanded quando o menu é recolhido
        } else {
            menu.style.left = '0';
            menuBtn.style.left = `${menuWidth}px`; // Movendo o botão para a posição do menu
            mainContent.style.maxWidth = `calc(100% - ${menuWidth}px)`; // Ajusta a largura máxima do main
            mainContent.style.marginLeft = `${menuWidth}px`; // Ajustando a margem esquerda do main
            sidebar.style.marginLeft = 'calc(2% + ' + menuWidth + 'px)'; // Ajustando a margem esquerda do sidebar
            mainContent.classList.add('main-expanded'); // Adicionando a classe main-expanded quando o menu é expandido
        }
    });
});
