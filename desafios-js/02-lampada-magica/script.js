const lampadaDesligada = document.getElementById('lampada');
const botao = document.getElementById('toggle-btn');

const ligada = "img/ligada.png";
const desligada = "img/desligada.png";
const quebrada = "img/quebrada.png";

let estado = false;
let cliques = 0;
const limite = 10;


botao.addEventListener("click", () => {
    estado = !estado;
    lampada.src = estado ? ligada : desligada;
    if (cliques >= limite) {
        lampada.src = quebrada;
        return;
    }

    cliques++;

    if (cliques === limite) {
        lampada.src = quebrada;
        return;
    }
});

