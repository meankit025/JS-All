"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
// console.log(btnOpenModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  //   console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    //console.log(e);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      //   console.log(`escape key pressed`);
      closeModal();
    }
  });
}

// /priyanka.shiravale@velotio.com
//  sunanda.painot@hcl.com.
