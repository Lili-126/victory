const sliderBox = document.querySelector('.slider-box');
const slides = document.querySelectorAll('.slide');
/* export */ const prevSl = document.querySelector('#prev');
/* export */ const nextSl = document.querySelector('#next');


let activeSlide = 0;


const setActiveSlider = (activeSlide) => {
  slides.forEach((index) => {
    activeSlide = index;
  });
}

const showSlide = (activeSlide) => {
  setActiveSlider();

  sliderBox.style.backgroundImage =  slides[activeSlide].style.backgroundImage;
}

/* export */ const setNextSlide =  () => {
  activeSlide += 1;

  if (activeSlide > slides.length -1) {
    activeSlide = 0;
  }

  setActiveSlider(activeSlide);
  showSlide(activeSlide);
}
nextSl.addEventListener('click', setNextSlide);


/* export */ const setPrevSlide = () => {
 activeSlide -= 1;
  if (activeSlide < 0) {
    activeSlide = slides.length -1;
  }

  setActiveSlider(activeSlide);
  showSlide(activeSlide);
}
prevSl.addEventListener('click', setPrevSlide);