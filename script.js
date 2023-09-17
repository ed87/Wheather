document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityInput");
  const searchButton = document.getElementById("searchButton");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");

  searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
      fetchWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  });

  
  function fetchWeather(city) {
    // Replace with your OpenWeatherMap API key
    const apiKey = "96b82c2e0656bbd3caf4896fabdaa712";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          cityName.textContent = `Weather in ${data.name}, ${data.sys.country}:`;
          temperature.textContent = `Temperature: ${data.main.temp}°C`;
          description.textContent = `Description: ${data.weather[0].description}`;
        } else {
          cityName.textContent = "City not found.";
          temperature.textContent = "";
          description.textContent = "";
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
});
