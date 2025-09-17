const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calculateBtn = document.getElementById("calculate-btn");
const tipAmountSpan = document.getElementById("tip-amount");
const totalAmountSpan = document.getElementById("total-amount");
function calcularGorjeta() {
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);
    if (isNaN(billValue) || isNaN(tipValue) || billValue <= 0 || tipValue < 0) {
    alert("Por favor, insira valores válidos!");
    return;
    }
    const tipAmount = billValue * (tipValue / 100);
    const totalAmount = billValue + tipAmount;
    tipAmountSpan.textContent = tipAmount.toFixed(2);
  totalAmountSpan.textContent = totalAmount.toFixed(2);
}
calculateBtn.addEventListener("click", calcularGorjeta);