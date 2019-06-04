let screens = document.querySelectorAll('.screenshots-grid .img img');
let lightbox = document.querySelector('.lightbox');
let img = lightbox.querySelector('img');
let isVisible = false;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document is ready !");
    screens.forEach(el => {
        el.addEventListener('click', () => {
            showLightbox(el.src);
        });
    });

    lightbox.addEventListener('click', () => {
        hideLightbox();
    });
});


function showLightbox(path) {
    if (!isVisible) {
            isVisible = true;
    img.src = path;
    lightbox.classList.add('show');
    }
}

function hideLightbox() {
    if (isVisible) {
        lightbox.classList.remove('show');
        isVisible = false;
    }
}