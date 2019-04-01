var sliderForm = document.querySelector('.slider-button-container');
var sliderButton1 = sliderForm.querySelector('.slider-button-1');
var sliderButton2 = sliderForm.querySelector('.slider-button-2');
var sliderButton3 = sliderForm.querySelector('.slider-button-3');
var sliderOne = document.querySelector('.slider1');
var sliderTwo = document.querySelector('.slider2');
var sliderThree = document.querySelector('.slider3');

sliderButton1.addEventListener('change', function (evt) {
  evt.preventDefault();
  sliderOne.classList.add('slider-show');
  sliderTwo.classList.remove('slider-show');
  sliderThree.classList.remove('slider-show');
});

sliderButton2.addEventListener('change', function (evt) {
  evt.preventDefault();
  sliderTwo.classList.add('slider-show');
  sliderOne.classList.remove('slider-show');
  sliderThree.classList.remove('slider-show');
});

sliderButton3.addEventListener('change', function (evt) {
  evt.preventDefault();
  sliderThree.classList.add('slider-show');
  sliderTwo.classList.remove('slider-show');
  sliderOne.classList.remove('slider-show');
});
