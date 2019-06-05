let localtags = [];
let locales = {};

updateDictionnary();
document.addEventListener("DOMContentLoaded", () => {
    let tags = document.querySelectorAll('h1, p, a');
    tags.forEach(el => {
        if (el.dataset.localKey) {
            localtags.push(el);
        }
    });
    // updateText();
    console.log(tags, localtags);
});

function updateDictionnary() {
    fetch('/js/local/en-US.json')
    .then(r => r.text())
    .then(t => console.log(t))
}

function updateText(){
    localtags.forEach(el => {
        if (el.dataset.localKey){
            el.innerHTML = "Hello World !!!";
        }
    });
}