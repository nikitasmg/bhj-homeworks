const reveal = document.querySelector(".reveal");
const heigh = document.documentElement.clientHeight - 300;
window.addEventListener("scroll", () => {
  if (reveal.getBoundingClientRect().top < heigh) {
    reveal.classList.add("reveal_active");
  } else if (
    reveal.getBoundingClientRect().top < 0 ||
    reveal.getBoundingClientRect().top > heigh
  ) {
    reveal.classList.remove("reveal_active");
  }
});
