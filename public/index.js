const btn = document.querySelector('.search__btn');

const getNearbyWeather = data => {
  fetch(
    `http://192.168.0.6:3000/nearby?latitude=${data.coords.latitude}&longitude=${data.coords.longitude}`
  )
    .then(response => response.json())
    .then(data => console.log(data));
};

const getCityWeather = e => {
  e.preventDefault();
  const input = document.querySelector('.search__input').value;
  fetch(`http://192.168.0.6:3000/search/${input}`)
    .then(response => response.json())
    .then(data => console.log(data));
};

btn.addEventListener('click', getCityWeather);
window.addEventListener(
  'DOMContentLoaded',
  navigator.geolocation.getCurrentPosition(getNearbyWeather)
);
