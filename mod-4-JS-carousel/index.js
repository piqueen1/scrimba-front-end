const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)

function moveToPrevSlide() {
  slides[slidePosition].classList.remove('carousel-item-visible')
  
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }
  slides[slidePosition].classList.add('carousel-item-visible')

}

function moveToNextSlide() {
  slides[slidePosition].classList.remove('carousel-item-visible')

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition += 1
  }
  slides[slidePosition].classList.add('carousel-item-visible')

}

console.log(totalSlides)