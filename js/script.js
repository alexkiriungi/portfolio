const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
const btn = document.querySelector(".send-btn");
const btn1 = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
});

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active")
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove("active");
};

btn.addEventListener('click', ()=> {
    alert("Please Email me at: mwasxander@gmail.com")
});

btn1.addEventListener('click', ()=> {
    alert("Please Email me at: mwasxander@gmail.com")
});