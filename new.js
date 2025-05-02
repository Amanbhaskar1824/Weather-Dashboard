const apiKey = "7fdede917da8c8167ed9832ba2cd69b4"; // Replace with your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherBox = document.querySelector(".weather-box");

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("weatherDesc").textContent =
        data.weather[0].description;
      document.getElementById("temp").textContent = `${data.main.temp} °C`;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
      weatherBox.style.display = "block";
    })
    .catch((error) => {
      alert(error.message);
      weatherBox.style.display = "none";
    });
}
