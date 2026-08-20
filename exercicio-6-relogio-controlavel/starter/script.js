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

  const now = new Date();
  const hours = formatTimePart(now.getHours());
  const minutes = formatTimePart(now.getMinutes());
  const seconds = formatTimePart(now.getSeconds());

  clockOutput.textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
  // TODO 1: se já existir um intervalo, não criar outro.
  // TODO 2: actualizar imediatamente, sem esperar um segundo.
  // TODO 3: guardar o ID devolvido por setInterval().

  if (clockIntervalId !== null) {
    status.textContent = "O relogio ja esta a correr; não foi criado outro intervalo";
    return;
  }

  updateClock();

  clockIntervalId = setInterval(() => {
    updateClock();
  }, 1000);

  status.textContent = "Relogio a correr com um unico intervalo ativo";
}

function stopClock() {
  // TODO 1: se já estiver parado, informar o utilizador.
  // TODO 2: cancelar o intervalo activo.
  // TODO 3: voltar a colocar clockIntervalId em null.
  
  if (clockIntervalId === null) {
    status.textContent = "Relogio já está parado";
    return;
  }

  clearInterval(clockIntervalId);
  clockIntervalId = null;

  status.textContent = "Relogio parado; o intervalo foi cancelado";
}
