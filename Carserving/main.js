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


// couter starts here

const cardElements = document.querySelectorAll('.customisation__card');


const targets = [165, 250, 350, 420];
const durations = [3000, 4000, 5000, 6000]; 

// Start counting animation for each element
cardElements.forEach((cardElement, index) => {
  let startTimestamp;
  const countElement = cardElement.querySelector('.count');
  const targetNumber = targets[index];
  const duration = durations[index];
  
  function startCounting(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const elapsedTime = timestamp - startTimestamp;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentValue = Math.floor(progress * targetNumber);
    countElement.textContent = currentValue;
    if (currentValue < targetNumber) {
      requestAnimationFrame(startCounting);
    }
  }

  requestAnimationFrame(startCounting);
});


const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


