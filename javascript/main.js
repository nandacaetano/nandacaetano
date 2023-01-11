// __________NAV___________
let nav = document.querySelector('nav')
let body = document.querySelector('body')
let btn_home = document.querySelector('#home');
let btn_sobre = document.querySelector('#sobreMim');
let btn_habilidades = document.querySelector('#habilidades');
let btn_experiencias = document.querySelector('#experiencias');

// ______________TELAS_____________________
let tela_home = document.querySelector('.home');


// _________FUNCOES E EVENTOS________________

// __HOME___
btn_home.addEventListener('click', navHome);
function navHome(){
    tela_home.style.display = "flex";
    body.style.background = "black";
    nav.style.color = "white";
    ul_nav.style.borderBottom = "solid white";
    ul_nav.style.borderRight = "solid white";
}

// __SOBRE NOS___
btn_sobre.addEventListener('click', navSobreMim);
ul_nav = document.querySelector('#ul_nav');
function navSobreMim(){
    tela_home.style.display = "none";
    body.style.background = "white";
    nav.style.color = "black";
    ul_nav.style.borderBottom = "solid black";
    ul_nav.style.borderRight = "solid black";
}
