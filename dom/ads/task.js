const rotatorFirst = document.querySelector(".rotator");
const rotators = Array.from(rotatorFirst.querySelectorAll(".rotator__case"));
let index = 0;

function loop() {
  rotators.forEach((el) => el.classList.remove("rotator__case_active"));
  rotators[index].classList.add("rotator__case_active");
  rotators[index].setAttribute(
    "style",
    `color:${rotators[index].getAttribute("data-color")}`
  );
  time = rotators[index].getAttribute("data-speed");
  index += 1;
  if (index >= rotators.length) {
    index = 0;
  }
  window.setTimeout(loop, time);
}

loop();
