const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

next.addEventListener("click", () => {
  if (index < slide.length - 1) {
    index++;
    updateSlide();
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlide();
  }
});

function updateSlide() {
  slides.style.transform = `translateX(-${index * 400}px)`;
}