const tabs = Array.from(document.querySelectorAll(".tab"));
const content = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((el) =>
  el.addEventListener("click", (event) => {
    const item = event.target;

    let index = tabs.indexOf(item);
    tabs.forEach((el) => el.classList.remove("tab_active"));
    item.classList.add("tab_active");
    content.forEach((el) => el.classList.remove("tab__content_active"));
    content[index].classList.add("tab__content_active");
  })
);
