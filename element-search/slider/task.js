const slidersItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDotsArray = Array.from(document.querySelectorAll(".slider__dot"));
const sliderDots = document.querySelector(".slider__dots");
const sliderArrows = document.querySelector(".slider__arrows");

/**
 * Close all active elements feom nodelist
 * @param {NodeList} elements
 * @param {String} options
 * @returns {void}
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
 * @returns {void}
 */
const activateElement = (list, options, index) => {
  closeAll(list, options);
  list[index].classList.add(`${options}_active`);
};

/**
 * Active prev slide
 * @returns {void}
 */
const prevSlide = () => {
  let activeSlideIndex = slidersItems.indexOf(
    document.querySelector(".slider__item_active")
  );
  activeSlideIndex -= 1;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidersItems.length - 1;
  }
  activateElement(slidersItems, "slider__item", activeSlideIndex);
  activateElement(sliderDotsArray, "slider__dot", activeSlideIndex);
};

/**
 * Active next slide
 * @returns {void}
 */
const nextSlide = () => {
  let activeSlideIndex = slidersItems.indexOf(
    document.querySelector(".slider__item_active")
  );
  activeSlideIndex += 1;
  if (activeSlideIndex >= slidersItems.length) {
    activeSlideIndex = 0;
  }
  activateElement(slidersItems, "slider__item", activeSlideIndex);
  activateElement(sliderDotsArray, "slider__dot", activeSlideIndex);
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
