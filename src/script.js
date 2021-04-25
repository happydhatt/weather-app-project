function getDate() {
  let now = new Date();
  let currentDate = document.querySelector("#current-date");
  let currentTime = document.querySelector("#current-time");
  let date = now.getDate();
  let year = now.getFullYear();
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[now.getMonth()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mins = now.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  currentDate.innerHTML = `${date}/${month}/${year}`;
  currentTime.innerHTML = `${hours}:${mins}`;
}

function changeCity() {
  event.preventDefault();
  let input = document.querySelector("input");
  let newCity = document.querySelector("h2");
  newCity.innerHTML = `${input.value}`;

  search(input.value);
}

function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("h1");
  currentTemp.innerHTML = `${temp}°C`;
  let currentDescription = response.data.weather[0].description;
  let displayDescription = document.querySelector("#description");
  displayDescription.innerHTML = `${currentDescription}`;
}

function search(city) {
  let apiKey = `62340eb91b90ddd58b6cdccd73f783bc`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

getDate();

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", changeCity);
