const book = document.getElementById("book");
const fontSizeControls = document.querySelector(".book__control_font-size");
const colorControls = document.querySelector(".book__control_color");
const bgControls = document.querySelector(".book__control_background");
const fsLinks = document.querySelectorAll(".fs");
const colorLinks = document.querySelectorAll(".color");
const bgLinks = document.querySelectorAll(".bg");
/**
 * Clear classes depending on regExp
 * @param {String} type - type of attr
 */
const clearAllClasses = (type) => {
  const regExp = new RegExp("book_" + type + `-.\\S*`);
  let str = regExp.exec(book.classList.value);
  book.classList.remove(str);
};

/**
 * Deactivate active class on every element from nodelist
 * @param {NodeList} list
 * @param {String} type
 */
const deActivate = (list, type) => {
  list.forEach((el) => el.classList.remove(`${type}_active`));
};

/**
 * Activate active class on target element
 * @param {string} type - type of element
 * @param {any} - listner event
 */
const activate = (event, type) => {
  event.target.classList.add(`${type}_active`);
};

/**
 * Change param depending on data-attribute
 * @param {any{}} event - listner event
 * @param {String} type - type of parameter
 */
const changeParam = (event, type) => {
  const target = event.target;
  if (target.classList.contains(type)) {
    event.preventDefault();
    const attr = target.dataset.type;
    if (attr) {
      clearAllClasses(type);
      book.classList.add(`book_${type}-${attr}`);
    } else {
      clearAllClasses(type);
    }
  }
};

fontSizeControls.addEventListener("click", (event) => {
  changeParam(event, "fs");
  deActivate(fsLinks, "fs");
  activate(event, "fs");
});

colorControls.addEventListener("click", (event) => {
  changeParam(event, "color");
  deActivate(colorLinks, "color");
  activate(event, "color");
});

bgControls.addEventListener("click", (event) => {
  changeParam(event, "bg");
  deActivate(bgLinks, "bg");
  activate(event, "bg");
});
