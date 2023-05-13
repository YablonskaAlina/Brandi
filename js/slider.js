let slider = document.querySelector('.slider');
let images = slider.querySelectorAll('img');
let currentImageIndex = 0;

function showNextSlide() {
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = '1';
}

function showPreviousSlide() {
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.opacity = '1';
}

// Показуємо перший слайд
images[currentImageIndex].style.opacity = '1';