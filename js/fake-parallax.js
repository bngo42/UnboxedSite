let bg = document.querySelector('.download .window .background');

let h,b,st,sh;

let update = () => {
    let bounds = bg.getBoundingClientRect();
    let elemPer = (bounds.bottom) /  h.clientHeight * 100;
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    let translate = percent - elemPer;
    bg.style.transform = `translate(0,${translate * 0.3}%)`;
}

document.addEventListener("DOMContentLoaded", () => {

    h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    window.addEventListener('scroll', update);
});
