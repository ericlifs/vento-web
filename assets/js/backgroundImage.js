const images = [
    'url(./images/bg.jpg)',
    'url(./images/pic01.jpg)',
    'url(./images/pic02.jpg)',
    'url(./images/pic03.jpg)'
];
let currentIndex = 1;
let backgroundImage = $('#banner');

setInterval(function() {
    const currentImage = images[currentIndex];
    backgroundImage.css('background-image', currentImage);

    currentIndex = ((currentIndex + 1) === images.length) ? 0 : ++currentIndex;
}, 5000);