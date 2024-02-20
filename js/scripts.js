const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();

  if (!inputValue.value || inputValue.value < 0) {
    alert("Informe o valor correto!");
    return;
  } else if (!selectedCurrency.value) {
    alert("Escolha uma moeda!");
  }

  converter();
}

function converter() {
  if (selectedCurrency.value === "eur") {
    valueConverted = inputValue.value / 5.34;
    result.innerHTML = valueFormatter("pt-BR", "EUR");
    animateResult();
  } else if (selectedCurrency.value === "dolar") {
    valueConverted = inputValue.value / 4.96;
    result.innerHTML = valueFormatter("en-US", "USD");
    animateResult();
  } else if (selectedCurrency.value === "libra") {
    valueConverted = inputValue.value / 6.25;
    result.innerHTML = valueFormatter("en-GB", "GBP");
    animateResult();
  }

  inputValue.value = "";
  selectedCurrency.value = "";
}

function valueFormatter(locale, currency) {
  const value = valueConverted.toLocaleString(`${locale}`, {
    style: "currency",
    currency: `${currency}`,
  });
  return `<span>🤑</span>${value}<span>🤑</span>`;
}

function animateResult() {
  return result.animate(
    [{ transform: "translateY(-150px)" }, { transform: "translateY(0px" }],
    {
      duration: 500,
    }
  );
}
