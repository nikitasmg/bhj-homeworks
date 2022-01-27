const links = document.querySelectorAll(".menu__link");
const subMenu = document.querySelectorAll(".menu_sub");
const mainMenu = document.querySelector(".menu_main");
const secondaryMenu = document.querySelector(".menu_secondary");
const mainMenuSubs = mainMenu.querySelectorAll(".menu_sub");
const secondaryMenuSubs = secondaryMenu.querySelectorAll(".menu_sub");

/**
 * Disable all active elements
 * @param {nodeList} elements
 */
const disable = (elements) => {
  elements.forEach((el) => {
    el.classList.remove("menu_active");
  });
};

/**
 * Disabel all elements from nodeList if click out of parrent
 * @param {nodeList} elements
 */
const outClick = (elements) => {
  window.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.closest(".menu_main") && !target.closest(".menu_secondary")) {
      disable(elements);
    }
  });
};

/**
 * Check target, then open and close submenu
 * @param {any} event
 * @param {NodeList} list
 * @returns{string}
 */
const menuWork = (event, list) => {
  let item = event.target;
  outClick(list);
  if (item.tagName === "A") {
    if (item.nextElementSibling) {
      event.preventDefault();
      if (item.nextElementSibling.classList.contains("menu_active")) {
        item.nextElementSibling.classList.remove("menu_active");
      } else {
        disable(list);
        item.nextElementSibling.classList.add("menu_active");
      }
    }
  }
};

mainMenu.addEventListener("click", (event) => {
  menuWork(event, mainMenuSubs);
});

secondaryMenu.addEventListener("click", (event) => {
  menuWork(event, secondaryMenuSubs);
});
