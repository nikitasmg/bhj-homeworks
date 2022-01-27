const reveal = document.querySelectorAll(".reveal");
const heigh = document.documentElement.clientHeight - 300;

window.addEventListener("scroll", () => {
  const { top: top1 } = reveal[0].getBoundingClientRect();
  const { top: top2 } = reveal[1].getBoundingClientRect();
  throttle(activeReveal(0, top1), 300);
  throttle(activeReveal(1, top2), 300);
});

/**
 * ACtivate element
 * @param {number} index - index element
 * @param {number} position - position relative to the viewport
 */
const activeReveal = (index, position) => {
  if (position > 0 && position < heigh) {
    reveal[index].classList.add("reveal_active");
  }
};

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    isThrottled = true;

    func.apply(this, arguments); // (1)

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
