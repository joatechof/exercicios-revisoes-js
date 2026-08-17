const salaryForm = document.getElementById("salaryForm");
const salaryInput = document.getElementById("salaryInput");
const result = document.getElementById("result");

salaryForm.addEventListener("submit", handleSalarySubmit);

function parseSalaries(rawValue) {
  const cleanValue = rawValue.trim();

  if (cleanValue === "") {
    return { error: "Escreve cinco salários." };
  }

  const parts = cleanValue.split(",").map(part => part.trim());

  if (parts.length !== 5) {
    return { error: "Deves escrever exactamente cinco salários." };
  }

  if (parts.some(part => part === "")) {
    return { error: "Não deixes posições vazias entre vírgulas." };
  }

  const salaries = parts.map(part => Number(part));

  if (salaries.some(salary => !Number.isFinite(salary) || salary < 0)) {
    return { error: "Usa apenas números finitos iguais ou superiores a zero." };
  }

  return { salaries };
}

function calculateStatistics(salaries) {
  // TODO 1: criar um acumulador para o total.
  // TODO 2: contar os salários estritamente superiores a 1000.
  // TODO 3: devolver { total, average, above1000 }.
  return null;
}

function handleSalarySubmit(event) {
  event.preventDefault();
  const parsed = parseSalaries(salaryInput.value);

  if (parsed.error) {
    showResult(parsed.error, true);
    return;
  }

  const statistics = calculateStatistics(parsed.salaries);

  if (statistics === null) {
    showResult("Completa a função calculateStatistics().", true);
    return;
  }

  showResult(
    `Total: ${statistics.total}\n` +
    `Média: ${statistics.average}\n` +
    `Acima de 1000: ${statistics.above1000}`
  );
}

function showResult(message, isError = false) {
  result.textContent = message;
  result.className = isError ? "error" : "";
}
