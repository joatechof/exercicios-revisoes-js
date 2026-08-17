const addForm = document.getElementById("addForm");
const addName = document.getElementById("addName");
const removeForm = document.getElementById("removeForm");
const removeName = document.getElementById("removeName");
const message = document.getElementById("message");
const participantsList = document.getElementById("participantsList");

let participants = ["Marta", "Rui"];

addForm.addEventListener("submit", handleAddSubmit);
removeForm.addEventListener("submit", handleRemoveSubmit);

function addParticipant(rawName) {
  // TODO 1: remover apenas espaços exteriores.
  // TODO 2: rejeitar o nome vazio.
  // TODO 3: impedir duplicados sem distinguir maiúsculas de minúsculas.
  // TODO 4: adicionar ao array e devolver { value: nome }.
  return { error: "Completa a função addParticipant()." };
}

function removeParticipant(rawName) {
  // TODO 1: rejeitar o nome vazio.
  // TODO 2: procurar o índice sem distinguir maiúsculas de minúsculas.
  // TODO 3: remover exactamente esse elemento.
  // TODO 4: devolver { value: nomeRemovido }.
  return { error: "Completa a função removeParticipant()." };
}

function handleAddSubmit(event) {
  event.preventDefault();
  const operation = addParticipant(addName.value);

  if (operation.error) {
    showMessage(operation.error, true);
    return;
  }

  renderParticipants();
  showMessage(`${operation.value} foi adicionado.`);
  addName.value = "";
  addName.focus();
}

function handleRemoveSubmit(event) {
  event.preventDefault();
  const operation = removeParticipant(removeName.value);

  if (operation.error) {
    showMessage(operation.error, true);
    return;
  }

  renderParticipants();
  showMessage(`${operation.value} foi removido.`);
  removeName.value = "";
  removeName.focus();
}

function renderParticipants() {
  participantsList.replaceChildren();

  if (participants.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "Ainda não existem participantes.";
    participantsList.appendChild(emptyItem);
    return;
  }

  for (const participant of participants) {
    const item = document.createElement("li");
    item.textContent = participant;
    participantsList.appendChild(item);
  }
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.className = isError ? "error" : "success";
}

renderParticipants();
