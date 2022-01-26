const mainInterest = document.querySelector(".interests_main");

mainInterest.addEventListener("click", (event) => {
  const target = event.target;

  if (target.type !== "checkbox") {
    return;
  } else {
    const closestActiveList = target.closest(".interests_active");
    if (closestActiveList) {
      activateParent(target);
      if (target.parentNode.nextElementSibling) {
        activateChilds(target);
        activateParent(target);
      }
    } else {
      activateChilds(target);
    }
  }
});

/**
 *Activate all childs, if parent is active
 * @param {any {}} target
 */
const activateChilds = (target) => {
  const list =
    target.parentNode.nextElementSibling.querySelectorAll(".interest__check");
  list.forEach((element) => {
    if (target.checked) {
      element.checked = true;
    } else {
      element.checked = false;
    }
  });
};

/**
 * Activate parent if some child is active, and deactivate parent if all children is disable
 * @param {any {}} target
 */
const activateParent = (target) => {
  const childrens = Array.from(
    target.closest(".interests_active").querySelectorAll(".interest__check")
  );
  const parent =
    target.closest(".interests_active").previousElementSibling
      .firstElementChild;
  debugger;

  if (childrens.every((el) => el.checked)) {
    parent.indeterminate = false;
    parent.checked = true;
    if (parent.closest(".interests_active")) {
      activateParent(parent);
    }
  } else if (childrens.every((el) => !el.checked)) {
    parent.indeterminate = false;
    parent.checked = false;
    if (parent.closest(".interests_active")) {
      activateParent(parent);
    }
  } else if (childrens.some((el) => el.checked)) {
    parent.indeterminate = true;
    if (parent.closest(".interests_active")) {
      activateParent(parent);
    }
  } else {
    parent.indeterminate = false;
    if (parent.closest(".interests_active")) {
      activateParent(parent);
    }
  }
};
