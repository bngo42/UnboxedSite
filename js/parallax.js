let parallax_items = document.querySelectorAll(".parallax-item");
let parallax_group = [];
parallax_items.forEach(element => {
   parallax_group.push(addElement(element));
});

document.addEventListener("scroll", () => {
    for (let i = 0; i < parallax_group.length; i++){
        parallax_group[i].element.style.top = parallax_group[i].basePosition + (-window.scrollY * parallax_group[i].speed) + "px";
    }
});




function addElement(element)
{
    let obj = {}

    obj.element = element;
    obj.basePosition = element.offsetTop;
    obj.speed = element.dataset.speed || 0.5;
    element.classList.add("parallax");
    return obj;
}