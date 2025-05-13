import { getClock } from "./js/clock";
import { createPlayList } from "./js/player";
import {nextSl, setNextSlide, prevSl, setPrevSlide } from "./js/slider";
import { showDefaultCityWeather, getData } from "./js/weather";
import "./index.html";
import "./style.css";



window.onload = function() {
  console.log(5);

//clock
setInterval( () => {
  getClock();
}, 0);


//player
createPlayList();

//slider
prevSl.addEventListener('click', setPrevSlide);
nextSl.addEventListener('click', setNextSlide);

//weather
showDefaultCityWeather();
getData();
}



