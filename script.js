const arrowLeft = document.querySelector('.left'),
    arrowRight = document.querySelector('.right'),
    imageSlider = document.querySelector('.images-slider'),
    arrayImages = document.querySelectorAll('.image'),
    image = document.querySelector('.image'),
    textContainer = document.querySelector('.text-container'),
    massageContainer = document.querySelectorAll('.container__massage');

let slideIndex = 0,
    previousSlide = 0;

const checkInactive = (currentSlide) => {
    if (0 < currentSlide && currentSlide < arrayImages.length) {
        arrowLeft.classList.remove('hidden')
        arrowRight.classList.remove('hidden')
    }
}
const nextSlide = () => {
    if (slideIndex < (arrayImages.length - 1)) {
        console.log(slideIndex);
        slideIndex += 1;
        massageContainer[previousSlide].classList.add('none');
        massageContainer[slideIndex].classList.remove('none');
        // arrayImages[previousSlide].classList.add('none');
        // arrayImages[previousSlide].classList.remove('visible');
        // arrayImages[slideIndex].classList.remove('none');
        // arrayImages[slideIndex].classList.add('visible');
        arrowRight.classList.remove('arrow-right-inactive');
        arrowRight.classList.add('arrow-right');
        arrowLeft.classList.add('arrow-left');
        checkInactive(slideIndex)
        previousSlide += 1;
    } else {
        arrowRight.classList.remove('arrow-right');
        // arrowRight.classList.add('arrow-right-inactive');
        arrowRight.classList.add('hidden')
    }
    // arrayImages[slideIndex].style.border  = '2px solid black';
    console.log(previousSlide);
}

const prevSlide = () => {
    if (slideIndex > 0) {
        slideIndex -= 1;
        massageContainer[previousSlide].classList.add('none');
        massageContainer[slideIndex].classList.remove('none');
        // arrayImages[previousSlide].classList.add('none');
        // arrayImages[previousSlide].classList.remove('visible');
        // arrayImages[slideIndex].classList.remove('none');
        // arrayImages[slideIndex].classList.add('visible');
        arrowLeft.classList.remove('arrow-left-inactive');
        arrowLeft.classList.add('arrow-left');
        arrowRight.classList.add('arrow-right');
        checkInactive(slideIndex)
        previousSlide -= 1;
    } else {
        arrowLeft.classList.remove('arrow-left');
        // arrowLeft.classList.add('arrow-left-inactive');
        arrowLeft.classList.add('hidden')
    }
    // arrayImages[slideIndex].style.border  = '2px solid black';
    console.log(previousSlide);
}

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);
