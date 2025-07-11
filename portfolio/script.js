const toggle = document.querySelector(".mob-toggle");
const menu = document.querySelector(".mob-nav");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
