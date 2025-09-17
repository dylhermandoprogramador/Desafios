const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const form = document.getElementById("signup-form");
const submitBtn = document.getElementById("submit-btn");

function validateUsername() {
  const group = usernameInput.parentElement;
  if (usernameInput.value.length >= 3) {
    group.classList.add("success");
    group.classList.remove("error");
    return true;
  } else {
    group.classList.add("error");
    group.classList.remove("success");
    return false;
  }
}
function validatePassword() {
  const group = passwordInput.parentElement;
  if (passwordInput.value.length >= 8) {
    group.classList.add("success");
    group.classList.remove("error");
    return true;
  } else {
    group.classList.add("error");
    group.classList.remove("success");
    return false;
  }
}

function validateConfirmPassword() {
  const group = confirmPasswordInput.parentElement;
  if (
    confirmPasswordInput.value.length >= 8 &&
    confirmPasswordInput.value === passwordInput.value
  ) {
    group.classList.add("success");
    group.classList.remove("error");
    return true;
  } else {
    group.classList.add("error");
    group.classList.remove("success");
    return false;
  }
}

function updateSubmitButton() {
  if (
    validateUsername() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

usernameInput.addEventListener("input", updateSubmitButton);
passwordInput.addEventListener("input", updateSubmitButton);
confirmPasswordInput.addEventListener("input", updateSubmitButton);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    validateUsername() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    alert("Cadastro realizado com sucesso!");
    form.reset();
    submitBtn.disabled = true;

    usernameInput.parentElement.classList.remove("success");
    passwordInput.parentElement.classList.remove("success");
    confirmPasswordInput.parentElement.classList.remove("success");
  } else {
    alert("Por favor, corrija os campos destacados.");
  }
});