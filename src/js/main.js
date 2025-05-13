import { getClock } from "./clock";
import { createPlayList } from "./player";
import {nextSl, setNextSlide, prevSl, setPrevSlide } from "./slider";
import { showDefaultCityWeather, getData } from "./weather";

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



