const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// custom cursor

const elements = document.querySelector("#main");

const cursor =document.querySelector("#cursor")

elements.addEventListener("mousemove", (e)=>{
    
   cursor.style.left= e.x+"px"
   cursor.style.top= e.y+"px"
})