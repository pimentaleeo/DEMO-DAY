let menu = document.querySelector('.hamburguer');
let menu1 = document.querySelector('aside');
let primeiro = document.querySelector('.x1');
let segundo = document.querySelector('.x2');
let terceiro = document.querySelector('.x3');
menu.onclick = function(){
    primeiro.classList.toggle('barra1')
    segundo.classList.toggle('barra1')
    terceiro.classList.toggle('barra1')
    menu1.classList.toggle('aside1')
}
