let localtags = [];
let locales = {};
let tags;

let switchers = document.querySelectorAll('.navbar .langage-picker a');
switchers.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        updateDictionnary(el.dataset.langage);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    tags = document.querySelectorAll('h1, p, a');
    tags.forEach(el => {
        if (el.dataset.localKey) {
            localtags.push(el);
        }
    });
    updateDictionnary('en-US');
});

function updateDictionnary(langage) {
    if (!langage){
        return ;
    }
    fetch(`https://bngo42.github.io/UnboxedSite/js/local/${langage}.json`)
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