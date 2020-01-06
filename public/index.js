const btn = document.querySelector('.search__btn');
const weatherContainer = document.querySelector('.weather');
const city = document.createElement('section');
const temp = document.createElement('section');
const icon = document.createElement('img');
const wind = document.createElement('section');

const days = [
  '',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const currentTime = new Date();
const date = document.createElement('section');
const day = document.createElement('section');

const getNearbyWeather = data => {
  fetch(
    `http://192.168.0.6:3000/nearby?latitude=${data.coords.latitude}&longitude=${data.coords.longitude}`
  )
    .then(response => response.json())
    .then(data => displayWeather(data));
};

const getCityWeather = e => {
  e.preventDefault();
  const input = document.querySelector('.search__input').value;
  fetch(`http://192.168.0.6:3000/search/${input}`)
    .then(response => response.json())
    .then(data => displayWeather(data));
};

const displayWeather = data => {
  document.querySelector('.search__input').value = '';
  day.classList.add('day');
  day.innerText = days[currentTime.getDay()];
  date.classList.add('date');
  date.innerText = `${currentTime.getDate()} ${months[currentTime.getMonth()]}`;
  city.classList.add('city');
  city.innerText = data.name;
  temp.classList.add('temp');
  temp.innerText = `${data.main.temp} ℃`;
  icon.classList.add('icon');
  icon.src = weatherIcons[data.weather[0].main];
  wind.classList.add('wind');
  wind.innerText = `Wind: ${data.wind.speed} m/s`;
  weatherContainer.appendChild(day);
  weatherContainer.appendChild(date);
  weatherContainer.appendChild(city);
  weatherContainer.appendChild(temp);
  weatherContainer.appendChild(icon);
  weatherContainer.appendChild(wind);
};

btn.addEventListener('click', getCityWeather);
window.addEventListener(
  'DOMContentLoaded',
  navigator.geolocation.getCurrentPosition(getNearbyWeather)
);
