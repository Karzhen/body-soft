const arrowLeft = document.querySelector('.left'),
    arrowRight = document.querySelector('.right'),
    imageSlider = document.querySelector('.images-slider'),
    arrayImages = document.querySelectorAll('.image'),
    image = document.querySelector('.image'),
    textContainer = document.querySelector('.text-container');

let slideIndex = 0,
    previousSlide = 0;
const nextSlide = () => {
    if (slideIndex < (arrayImages.length - 1)) {
        console.log(slideIndex);
        slideIndex += 1;
        arrayImages[previousSlide].classList.add('hidden');
        arrayImages[slideIndex].classList.remove('hidden');
        arrowRight.classList.remove('arrow-right-inactive');
        arrowRight.classList.add('arrow-right');
        arrowLeft.classList.add('arrow-left');
    } else {
        arrowRight.classList.remove('arrow-right');
        arrowRight.classList.add('arrow-right-inactive');
    }
    previousSlide += 1;
    arrayImages[slideIndex].style.border  = '2px solid black';
    console.log(previousSlide);
}

arrowRight.addEventListener('click', nextSlide);
