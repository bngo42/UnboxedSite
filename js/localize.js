let localtags = [];
let locales = {};
let tags;


document.addEventListener("DOMContentLoaded", () => {
    tags = document.querySelectorAll('h1, p, a');
    tags.forEach(el => {
        if (el.dataset.localKey) {
            localtags.push(el);
        }
    });
    updateDictionnary();
});

function updateDictionnary() {
    fetch('https://bngo42.github.io/UnboxedSite/js/local/fr-FR.json')
    .then(res => res.text())
    .then(text => {
        let json = JSON.parse(text);
        locales = json.localization;
        console.log(locales);
    })
    .then(updateText)
    .catch(() => {
        console.error('could not fetch data');
    });
}

function updateText(){
    localtags.forEach(el => {
        if (el.dataset.localKey){
            getTranslation(el.dataset.localKey)
            .then(res => el.innerHTML = res)
            .catch(console.error);
        }
    });
}


function getTranslation(key){
    return new Promise((resolve, reject) => {
        locales.forEach(el => {
            if (el.key == key){
                resolve(el.value);
            }
        });
        reject("value not found");
    });
}