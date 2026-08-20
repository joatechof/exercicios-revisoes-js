const analyseButton = document.getElementById("analyseButton");
const originalOutput = document.getElementById("originalOutput");
const increasedOutput = document.getElementById("increasedOutput");
const affordableOutput = document.getElementById("affordableOutput");
const questionsOutput = document.getElementById("questionsOutput");

const cars = [
  { color: "vermelho", price: 2000 },
  { color: "azul", price: 4500 },
  { color: "rosa", price: 5000 },
  { color: "branco", price: 7800 }
];

analyseButton.addEventListener("click", handleAnalyseClick);

function increasePrices(carList, percentage) {
  // TODO: devolver um novo array com novos objectos e preços aumentados.
  
  // valor = 100; valorComMais20Porcento = valor * 1.3

  const multiplier = 1 + percentage / 100;

  return carList.map(item => {
    return {
      ...item,
      price: Math.round(item.price * multiplier),
    }
  })
}

function selectAffordableCars(carList, maximumPrice) {
  // TODO: devolver apenas os carros cujo preço seja <= maximumPrice.
  return carList.filter(item => item.price <= maximumPrice);
}

function hasCarBelow(carList, priceLimit) {
  // TODO: responder true se existir pelo menos um carro abaixo do limite.
  return carList.some(item => item.price < priceLimit);
}

function areAllCarsBelow(carList, priceLimit) {
  // TODO: responder true se todos os carros estiverem abaixo do limite.

  return carList.every(car => car.price < priceLimit);
}

function handleAnalyseClick() {
  const originalSnapshot = JSON.stringify(cars);
  const increasedCars = increasePrices(cars, 20);

  if (increasedCars === null) {
    showIncompleteMessage();
    return;
  }

  const affordableCars = selectAffordableCars(increasedCars, 6000);
  const hasCheapCar = hasCarBelow(increasedCars, 2500);
  const allBelow10000 = areAllCarsBelow(increasedCars, 10000);

  if (affordableCars === null || hasCheapCar === null || allBelow10000 === null) {
    showIncompleteMessage();
    return;
  }

  originalOutput.textContent = formatCars(cars);
  increasedOutput.textContent = formatCars(increasedCars);
  affordableOutput.textContent = formatCars(affordableCars);
  questionsOutput.textContent =
    `Existe abaixo de 2500 €: ${hasCheapCar}\n` +
    `Todos abaixo de 10000 €: ${allBelow10000}\n` +
    `Original preservado: ${JSON.stringify(cars) === originalSnapshot}`;
}

function formatCars(carList) {
  return carList.map(car => `${car.color}: ${car.price} €`).join("\n");
}

function showIncompleteMessage() {
  questionsOutput.textContent = "Completa as quatro funções do exercício.";
  questionsOutput.className = "error";
}
