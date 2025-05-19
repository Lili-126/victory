import { getClock } from "./clock.js";
import { createPlayList } from "./player.js";
import {nextSl, setNextSlide, prevSl, setPrevSlide } from "./slider.js";
import { showDefaultCityWeather, getData } from "./weather.js";


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



