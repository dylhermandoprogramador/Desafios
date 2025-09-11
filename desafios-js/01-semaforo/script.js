const semaforoImg = document.getElementById('semaforo-img');
const vermelho = document.getElementById('Vermelho');
const amarelo = document.getElementById('Amarelo');
const verde = document.getElementById('Verde');
const auto = document.getElementById('Automatico');

let intervalo;

vermelho.addEventListener("click", function () {
  semaforoImg.src = "img/vermelho.png";
});

amarelo.addEventListener("click", function () {
  semaforoImg.src = "img/amarelo.png";
});

verde.addEventListener("click", function () {
  semaforoImg.src = "img/verde.png";
});

const cores = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"];
let index = 0;

auto.addEventListener("click", function () {
  intervalo = setInterval(() => {
    semaforoImg.src = cores[index];
    index = (index + 1) % cores.length;
  }, 2000);
});
