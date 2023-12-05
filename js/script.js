const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

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