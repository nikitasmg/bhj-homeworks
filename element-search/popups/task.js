const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modals = document.querySelectorAll(".modal");

document.addEventListener("DOMContentLoaded", () => {
  modalMain.classList.add("modal_active");
});

modals.forEach((el) =>
  el.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target.classList.contains("modal__close") &&
      !target.classList.contains("show-success")
    ) {
      modalMain.classList.remove("modal_active");
      modalSuccess.classList.remove("modal_active");
    } else if (target.classList.contains("show-success")) {
      modalMain.classList.remove("modal_active");
      modalSuccess.classList.add("modal_active");
    }
  })
);
