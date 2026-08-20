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
  const name = rawName.trim();

  if (name === "") {
    return { error: "Escreve um nome" };
  }

  const normalizedName = name.toLowerCase();
  
  const alreadyExists = participants.some(item => item.toLowerCase() === normalizedName);

  if (alreadyExists) {
    return { error: "Esse participante já existe" };
  }

  participants.push(name);

  return { value: name };
}

function removeParticipant(rawName) {
  // TODO 1: rejeitar o nome vazio.
  // TODO 2: procurar o índice sem distinguir maiúsculas de minúsculas.
  // TODO 3: remover exactamente esse elemento.
  // TODO 4: devolver { value: nomeRemovido }.

  const name = rawName.trim();

  if (name === "") {
    return { error: "Escreve um nome a remover" };
  }

  const normalizedName = name.toLowerCase();
  
  const index = participants.findIndex(item => item.toLowerCase() === normalizedName);

  if (index === -1) {
    return { error: "Participante não encontrado" };
  }

  const [removedParticipant] = participants.splice(index, 1);

  return { value: removedParticipant };
}

function handleAddSubmit(event) {
  event.preventDefault();
  const operation = addParticipant(addName.value); // { error: ..., value: ...}

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
