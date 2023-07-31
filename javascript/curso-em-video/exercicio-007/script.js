var area = document.querySelector('div#area');

area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);

function clicar() {
    area.style.background = 'rgb(25, 90, 250)';
    area.innerText = 'Clicou!';
}

function entrar() {
    area.style.background = 'rgb(255, 255, 0)';
    area.innerText = 'Entrou!';
}

function sair() {
    area.style.background = 'rgb(255, 0, 0)';
    area.innerText = 'Saiu!';
} 