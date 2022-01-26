const slidersItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDotsArray = Array.from(document.querySelectorAll(".slider__dot"));
const sliderDots = document.querySelector(".slider__dots");
const sliderArrows = document.querySelector(".slider__arrows");
let count = 0;

/**
 * Close all active elements feom nodelist
 * @param {NodeList} elements
 * @param {String} options
 */

const closeAll = (elements, options) => {
  elements.forEach((el) => {
    el.classList.remove(`${options}_active`);
  });
};

/**
 * Active element from node list
 * @param {NodeList} list
 * @param {String} options
 * @param {indexOfArray} index
 */
const activateElement = (list, options, index) => {
  closeAll(list, options);
  list[index].classList.add(`${options}_active`);
};

/**
 * Active prev slide
 */
const prevSlide = () => {
  count -= 1;
  if (count < 0) {
    count = slidersItems.length - 1;
  }
  console.log(count);
  activateElement(slidersItems, "slider__item", count);
  activateElement(sliderDotsArray, "slider__dot", count);
};

/**
 * Active next slide
 * @returns {void}
 */
const nextSlide = () => {
  count += 1;
  if (count >= slidersItems.length) {
    count = 0;
  }
  console.log(count);
  activateElement(slidersItems, "slider__item", count);
  activateElement(sliderDotsArray, "slider__dot", count);
};

sliderArrows.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("slider__arrow_prev")) {
    prevSlide();
  } else if (target.classList.contains("slider__arrow_next")) {
    nextSlide();
  } else {
    return;
  }
});

sliderDots.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("slider__dot")) {
    const index = sliderDotsArray.indexOf(target);

    activateElement(slidersItems, "slider__item", index);
    activateElement(sliderDotsArray, "slider__dot", index);
  } else {
    return;
  }
});
