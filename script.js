const arrowLeft = document.querySelector('.left'),
    arrowRight = document.querySelector('.right'),
    imageSlider = document.querySelector('.images-slider'),
    arrayImages = document.querySelectorAll('.image'),
    image = document.querySelector('.image'),
    textContainer = document.querySelector('.text-container'),
    massageContainer = document.querySelectorAll('.container__massage');

let slideIndex = 0,
    previousSlide = 0;

const checkArrows = () => {
    if (slideIndex === 0) {
        arrowLeft.classList.add('hidden');
    } else if (slideIndex === arrayImages.length - 1) {
        arrowRight.classList.add('hidden');
    }
}

const checkInactive = (currentSlide) => {
    if (0 < currentSlide && currentSlide < arrayImages.length) {
        arrowLeft.classList.remove('hidden')
        arrowRight.classList.remove('hidden')
    }
}

const containerServices = (previous, current) => {
    massageContainer[previous].classList.add('none');
    massageContainer[current].classList.remove('none');
    arrowRight.classList.add('arrow-right');
    arrowLeft.classList.add('arrow-left');
    checkInactive(current);
}

const nextSlide = () => {
    if (slideIndex < (arrayImages.length - 1)) {
        slideIndex += 1;
        containerServices(previousSlide, slideIndex);
        previousSlide += 1;
    } else {
        arrowRight.classList.remove('arrow-right');
        arrowRight.classList.add('hidden')
    }
    checkArrows();
}

const prevSlide = () => {
    if (slideIndex > 0) {
        slideIndex -= 1;
        containerServices(previousSlide, slideIndex);
        previousSlide -= 1;
    } else {
        arrowLeft.classList.remove('arrow-left');
        arrowLeft.classList.add('hidden')
    }
    checkArrows();
}

window.addEventListener('load', checkArrows);
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);
