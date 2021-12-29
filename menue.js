// menu
const hamburger = document.querySelector(".hamburger-menu")
const list = document.querySelector(".list-nav")
const showcase = document.querySelector(".showcase")

hamburger.addEventListener("click", roll)

function roll() {
  list.classList.toggle("hamburger-list")
  showcase.classList.toggle("beneath")
}
