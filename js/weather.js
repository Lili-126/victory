const weatherIcon = document.querySelector('.weather__icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const inputCity = document.querySelector('#city');
const submitCity = document.querySelector('#form');
const titleCity = document.querySelector('.title-city');


 const getCity = (e) => {
  e.preventDefault();

  const inputText = inputCity.value.trim();
  console.log(inputText);

  inputCity.value = "";  //отчищаем инпут

  getWeather(inputText);
}

submitCity.addEventListener('submit', getCity);



const removeClassListWeatherIcons = (weatherIcon) => {
    weatherIcon.className = "weather-icon owf owf-3x";
}

async function getWeather(inputText) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&lang=ru&appid=8abce0061ea2fd23830a28527c0b317b&units=metric`;
  const res = await fetch(url);
  const date = await res.json();

  removeClassListWeatherIcons(weatherIcon, date);


  titleCity.textContent = date.name;
  temperature.textContent = Math.round(date.main.temp) + '°C';
  weatherDescription.textContent = date.weather[0].description;
  weatherIcon.classList.add(`owf-${date.weather[0].id}`);
}


export function showDefaultCityWeather() {
  getWeather(titleCity.textContent);
}
/* showDefaultCityWeather(); */


export const getData = () => {
  const date = document.querySelector('.date');
  date.textContent = new Date().toLocaleString('ru',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
}
/* getData(); */








