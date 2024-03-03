const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

const apiKey = "Adn7v23KX5CiAoa2g40n+Q==2sccdsRKL3XeZe5z";
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

convert.addEventListener('click', () => {
  console.log(amount)
  console.log(currency)

  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const url = `${apiUrl}${currencyTotal}&amount=${amountTotal}`; // Append amount parameter

  fetch(url, {
    headers: {
      'X-API-KEY': apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      const rate = data.rate;
      const resultPrice = amountTotal * rate;
      result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`; // Use backticks
    })
    .catch(error => {
      console.error("Request failed", error);
      result.innerHTML = "An error occurred. Please try again.";
    });
});
