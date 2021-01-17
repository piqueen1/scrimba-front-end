const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0;
const totalSlides = slides.length;

function moveToPrevSlide() {
  slidePosition -= 1
}

function moveToNextSlide() {
  slidePosition += 1
}

document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)


console.log(totalSlides)