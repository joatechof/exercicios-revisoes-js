const minimumForm = document.getElementById("minimumForm");
const numbersInput = document.getElementById("numbersInput");
const result = document.getElementById("result");

minimumForm.addEventListener("submit", handleMinimumSubmit);

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

function findMinimum(numbers) {
  // [7, -3, 4, -3]
  // TODO 1: devolver null quando o array está vazio.
  // TODO 2: usar o primeiro elemento como mínimo provisório.
  // TODO 3: guardar em conjunto o valor mínimo e o seu índice.
  // TODO 4: preservar a primeira ocorrência quando o mínimo se repete.

  if (numbers.length === 0) {
    return null;
  }

  /*
  let minimumValue = numbers[0];
  let minimumIndex = 0;

  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < minimumValue) {
      minimumValue = numbers[index];
      minimumIndex = index;
    }
  }
  */

  let minimumValue = Math.min(...numbers);
  let minimumIndex = numbers.findIndex((item) => item === minimumValue);

  return { 
    value: minimumValue, 
    index: minimumIndex, 
  };
}

function handleMinimumSubmit(event) {
  event.preventDefault();
  const parsed = parseNumberList(numbersInput.value);

  if (parsed.error) {
    showResult(parsed.error, true);
    return;
  }

  const minimum = findMinimum(parsed.numbers);

  if (minimum === null) {
    showResult("Completa a função findMinimum().", true);
    return;
  }

  showResult(`Mínimo: ${minimum.value}\nPrimeiro índice: ${minimum.index}`);
}

function showResult(message, isError = false) {
  result.textContent = message;
  result.className = isError ? "error" : "";
}
