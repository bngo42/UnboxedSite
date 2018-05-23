let lightbox = document.querySelector('.lightbox');
let thumbnails = document.querySelectorAll(".lightbox-thumbnail");
for (let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener("click", () => {
        let popup = document.querySelector(".lightbox-popup-img");
        popup.setAttribute("src", thumbnails[i].dataset.path);
        togglePopup();
    });
}

lightbox.addEventListener('click', () => {
    togglePopup();
});

function togglePopup(){
    lightbox.classList.toggle("lightbox-hide");            
}  