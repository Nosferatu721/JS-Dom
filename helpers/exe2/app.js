// const btnMenu = document.getElementById("btnMenu");
// const btnMenuIcon = document.querySelector("#btnMenu i");
// const blockMenu = document.getElementById("blockMenu");
// const blockMenuOption = document.querySelectorAll(".link");

// btnMenu.addEventListener("click", () => {
//   const display = blockMenu.style.display;
//   if (display === "none" || display === "") {
//     blockMenu.style.display = "block";
//     btnMenuIcon.className = "fa fa-times";
//   } else {
//     blockMenu.style.display = "none";
//     btnMenuIcon.className = "fa fa-bars";
//   }
// });

// blockMenuOption.forEach((el) => {
//   el.addEventListener("click", () => {
//     btnMenuIcon.className = "fa fa-bars";
//     blockMenu.style.display = "none";
//   });
// });

//----------------------
// Ejercicio 1
//----------------------
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("blockMenu");
  const btnMenu = document.getElementById("btnMenu");
  document.addEventListener("click", (e) => {
    if (e.target.matches(`.btn-menu`) || e.target.matches(`.btn-menu *`)) {
      menu.classList.toggle("isActive");
      btnMenu.classList.toggle("is-active");
    }
    if (e.target.matches(".nav-menu a")) {
      menu.classList.remove("isActive");
      btnMenu.classList.remove("is-active");
    }
  });
});

// --------------------
// Ejercicio 2
// --------------------
