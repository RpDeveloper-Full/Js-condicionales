function verificarEdad() {
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(edad)) {
    resultado.textContent = "Por favor, ingresa una edad válida.";
  } else if (edad < 13) {
    resultado.textContent = "Eres un niño.";
  } else if (edad < 18) {
    resultado.textContent = "Eres un adolescente.";
  } else if (edad < 60) {
    resultado.textContent = "Eres un adulto.";
  } else {
    resultado.textContent = "Eres un adulto mayor.";
  }
}