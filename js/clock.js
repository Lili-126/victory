const hourArrow = document.querySelector('.hours');
const minuteArrow = document.querySelector('.minutes');
const secondArrow = document.querySelector('.seconds');
let deg = 6; //шаг минутной и секундной стрелок

export const getClock = () => {
  const date = new Date();
  let hours = date.getHours() * 30;  // часы умнажаем на 30 градусов (шаг часа = 30 градусов)
  let minutes = date.getMinutes() * deg;
  let seconds = date.getSeconds() * deg;

  hourArrow.style.transform = `rotateZ(${hours + (minutes  / 12)}deg)`;
  minuteArrow.style.transform = `rotateZ(${minutes}deg)`;
  secondArrow.style.transform = `rotateZ(${seconds}deg)`;
}

/*  setInterval( () => {
  getClock();
}, 0);
 */
