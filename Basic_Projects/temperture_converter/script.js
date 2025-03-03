const celsiusEl = document.getElementById("Celsius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "Celsius":
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "Fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "Kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}