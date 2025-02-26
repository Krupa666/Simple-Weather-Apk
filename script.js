const apiKey = '233234b49989df2d54ba40bd935a0edd'; // Replace with your OpenWeatherMap API key

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');
const snowContainer = document.getElementById("snow-container");


document.getElementById("searchButton").addEventListener("click", () => {
    // Add flash effect
    const flash = document.createElement("div");
    flash.classList.add("flash");
    document.body.appendChild(flash);
  
    // Remove flash after animation
    setTimeout(() => {
      flash.remove();
    }, 300);
  
    // Add shake effect to the button
    const button = document.getElementById("searchButton");
    button.classList.add("shake");
  
    // Remove shake effect after animation
    setTimeout(() => {
      button.classList.remove("shake");
    }, 500);
  });
  
  document.getElementById("noteBtn").addEventListener("click", () => {
    // Add flash effect
    const flash = document.createElement("div");
    flash.classList.add("flash");
    document.body.appendChild(flash);
  
    // Remove flash after animation
    setTimeout(() => {
      flash.remove();
    }, 300);
  
    // Add shake effect to the button
    const button = document.getElementById("noteBtn");
    button.classList.add("shake");
  
    // Remove shake effect after animation
    setTimeout(() => {
      button.classList.remove("shake");
    }, 500);
  });
  


searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});
const noteBtn = document.getElementById('noteBtn');

// Event listener for the Note button
noteBtn.addEventListener('click', () => {
  alert("There's only 3 cities added (Indian metropolitan..).");
});


async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      alert('City not found. Please try again.');
    }
  } catch (error) {
    alert('Error fetching weather data. Please try again later.');
  }
}

function displayWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Description: ${data.weather[0].description}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  weatherInfo.style.display = 'block';
}
