let contador = 0;
const valor = document.getElementById("value");
const btnDecrementar = document.querySelector(".decrease");
const btnIncrementar = document.querySelector(".increase");
function atualizarTela() {
    valor.textContent = contador;
  }
  btnIncrementar.addEventListener("click", function() {
    contador++;
    atualizarTela(); 
  });

  btnDecrementar.addEventListener("click", function() {
    contador--;
    atualizarTela(); 
  });