let bg = document.querySelector('.download .window .background');

let h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

let update = () => {
    let bounds = bg.getBoundingClientRect();
    let elemPer = (bounds.bottom) /  h.clientHeight * 100;
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    let translate = percent - elemPer;
    bg.style.transform = `translate(0,${translate * 0.5}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', update);
});
