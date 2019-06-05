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
    fetch('https://bngo42.github.io/UnboxedSite/js/local/en-US.json')
    .then(res => res.text())
    .then(text => {
        let json = JSON.parse(text);
        locales = json.localization;
        console.log(locales);
    });
}

function updateText(){
    localtags.forEach(el => {
        if (el.dataset.localKey){
            el.innerHTML = "Hello World !!!";
        }
    });
}