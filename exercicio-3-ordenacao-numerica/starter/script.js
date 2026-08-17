const sortForm = document.getElementById("sortForm");
const numbersInput = document.getElementById("numbersInput");
const directionSelect = document.getElementById("directionSelect");
const result = document.getElementById("result");

sortForm.addEventListener("submit", handleSortSubmit);

function parseNumberList(rawValue) {
  const cleanValue = rawValue.trim();

  if (cleanValue === "") {
    return { error: "Escreve pelo menos um número." };
  }

  const parts = cleanValue.split(",").map(part => part.trim());

  if (parts.some(part => part === "")) {
    return { error: "Não deixes posições vazias entre vírgulas." };
  }

  const numbers = parts.map(part => Number(part));

  if (numbers.some(number => !Number.isFinite(number))) {
    return { error: "Usa apenas números finitos." };
  }

  return { numbers };
}

function sortNumbers(numbers, direction = "asc") {
  // TODO 1: validar se direction é "asc" ou "desc".
  // TODO 2: criar uma cópia do array.
  // TODO 3: usar um comparador numérico adequado à direcção.
  return null;
}

function handleSortSubmit(event) {
  event.preventDefault();
  const parsed = parseNumberList(numbersInput.value);

  if (parsed.error) {
    showResult(parsed.error, true);
    return;
  }

  const originalSnapshot = [...parsed.numbers];
  const orderedNumbers = sortNumbers(parsed.numbers, directionSelect.value);

  if (orderedNumbers === null) {
    showResult("Completa a função sortNumbers().", true);
    return;
  }

  showResult(
    `Ordenado: ${JSON.stringify(orderedNumbers)}\n` +
    `Original: ${JSON.stringify(parsed.numbers)}\n` +
    `Original preservado: ${arraysAreEqual(parsed.numbers, originalSnapshot)}`
  );
}

function arraysAreEqual(firstArray, secondArray) {
  return JSON.stringify(firstArray) === JSON.stringify(secondArray);
}

function showResult(message, isError = false) {
  result.textContent = message;
  result.className = isError ? "error" : "";
}
