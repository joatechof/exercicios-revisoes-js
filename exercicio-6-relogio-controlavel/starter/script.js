const clockOutput = document.getElementById("clockOutput");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const status = document.getElementById("status");

let clockIntervalId = null;

startButton.addEventListener("click", startClock);
stopButton.addEventListener("click", stopClock);

function formatTimePart(value) {
  return String(value).padStart(2, "0");
}

function updateClock() {
  // TODO 1: criar uma Date com o instante actual.
  // TODO 2: obter horas, minutos e segundos.
  // TODO 3: formatar as três partes com dois algarismos.
  // TODO 4: escrever HH:MM:SS em clockOutput.
}

function startClock() {
  // TODO 1: se já existir um intervalo, não criar outro.
  // TODO 2: actualizar imediatamente, sem esperar um segundo.
  // TODO 3: guardar o ID devolvido por setInterval().
  status.textContent = "Completa a função startClock().";
}

function stopClock() {
  // TODO 1: se já estiver parado, informar o utilizador.
  // TODO 2: cancelar o intervalo activo.
  // TODO 3: voltar a colocar clockIntervalId em null.
  status.textContent = "Completa a função stopClock().";
}
