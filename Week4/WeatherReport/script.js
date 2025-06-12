const apiKey = '9ae1c6efc2068d4aff126d8ec6225399';
const button = document.getElementById("SearchButton");


async function getWeather() {
  const city = document.getElementById('cityInput').value;
  //const city = "medellin"
  const resultDiv = document.getElementById('result');

  if (!city) {
    resultDiv.innerText = 'Por favor ingresa una ciudad.';
    return;
  }

  try {
    resultDiv.innerText = 'Buscando...';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );

    if (!response.ok) throw new Error('Ciudad no encontrada.');

    const data = await response.json();
    const { name, main, weather } = data;

    console.log(data)

    resultDiv.innerHTML = `
      <p><strong>Ciudad:</strong> ${name}</p>
      <p><strong>Temperatura:</strong> ${main.temp}°C</p>
      <p><strong>Clima:</strong> ${weather[0].description}</p>
    `;
  } catch (error) {
    console.log(error)
    resultDiv.innerText = error.message;
  }
}



button.addEventListener("click", (event) => {
    console.log("sse hizo clic")
    console.log(event)
    
    // button.textContent = `Recuento de clics: ${event.detail}`;
    getWeather()
  });