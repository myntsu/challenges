const aside = document.querySelector("aside");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  aside.classList.toggle("opened");
  console.log("clicked");
})