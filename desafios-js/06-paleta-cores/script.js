const botao = document.getElementById("change-color-btn");
const colorName = document.getElementById("color-name");
const body = document.body;
function gerarCorAleatoria() {

    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const cor = `rgb(${r}, ${g}, ${b})`;
  
    return cor;
  }
  
  botao.addEventListener("click", function() {
    const novaCor = gerarCorAleatoria();
  
    body.style.backgroundColor = novaCor;
  
    colorName.textContent = novaCor;
  });