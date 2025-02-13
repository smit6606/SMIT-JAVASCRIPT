const apiKey = "89157e738820e13b248890c690c4200a";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");
const container = document.querySelector(".container");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  } else {
    alert("Please enter a city name.");
  }
});

function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("City not found. Please try again.");
      }
      return res.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      weatherInfo.innerHTML = `<p>${error.message}</p>`;
    });
}

function displayWeather(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  const { description, icon } = data.weather[0];

  const weatherHtml = `
        <h2>${name}</h2>
        <div class="temperature">${temp}°C</div>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${speed} m/s</p>
        <p>Weather: ${description}</p>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    `;
  weatherInfo.innerHTML = weatherHtml;

  setBackgroundImage(description);
}

function setBackgroundImage(weatherDescription) {
  let backgroundImage =
    "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg";

  // Set specific background images
  if (weatherDescription.includes("rain")) {
    backgroundImage =
      "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg"; // Rainy weather
  } else if (weatherDescription.includes("cloud")) {
    backgroundImage =
      "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg"; // Cloudy weather
  } else if (weatherDescription.includes("clear")) {
    backgroundImage =
      "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg"; // Clear/sunny weather
  } else if (weatherDescription.includes("snow")) {
    backgroundImage =
      "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg"; // Snowy weather
  }

  document.body.style.backgroundImage = `url('${backgroundImage}')`;
}
