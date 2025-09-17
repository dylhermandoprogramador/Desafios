const citacoes = [
  "A persistência realiza o impossível.",
  "Seja a mudança que você quer ver no mundo.",
  "Grandes conquistas começam com pequenos passos.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em si mesmo e tudo será possível."
];
const botaoNovaCitacao = document.getElementById("nova-citacao-btn");
const citacaoTexto = document.getElementById("citacao-texto").querySelector("p");
function gerarCitacao() {
    const indice = Math.floor(Math.random() * citacoes.length);
    citacaoTexto.textContent = citacoes[indice];
}
botaoNovaCitacao.addEventListener("click", gerarCitacao);