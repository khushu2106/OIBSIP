const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.replace("ri-menu-line","ri-close-line");

});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const navsearch = document.getElementById("nav_search");

navsearch.addEventListener("click",(e)=>{
    navsearch.classList.toggle("open");
});

