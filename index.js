// const apiKey = 'YOUR_API_KEY_HERE';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

const apiKey = 'bb39837d0b5cc93954ca86165300f1f3';
const url = `https://api.openweathermap.org/data/2.5/weather?q=kenya&appid=${apiKey}&units=metric`;

const locationElement = document.getElementById('location');
const descriptionElement = document.getElementById('description');
const temperatureElement = document.getElementById('temperature');

async function getWeatherData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);

    const location = data.name;
    const description = data.weather[0].description;
    const temperature = data.main.temp;

    locationElement.textContent = location;
    descriptionElement.textContent = description;
    temperatureElement.textContent = `${temperature} °C`;
  } catch (error) {
    console.log('Error:', error);
  }
}

getWeatherData();
