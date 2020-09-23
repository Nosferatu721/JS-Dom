const btnMenu = document.getElementById("btnMenu");
const btnMenuIcon = document.querySelector("#btnMenu i");
const blockMenu = document.getElementById("blockMenu");
const blockMenuOption = document.querySelectorAll(".link");

blockMenu.style.display = "none";

btnMenu.addEventListener("click", () => {
  const display = blockMenu.style.display;
  if (display === "none" || display === "") {
    blockMenu.style.display = "block";
    btnMenuIcon.className = "fa fa-times";
  } else {
    blockMenu.style.display = "none";
    btnMenuIcon.className = "fa fa-bars";
  }
});

blockMenuOption.forEach((el) => {
  el.addEventListener("click", () => {
    btnMenuIcon.className = "fa fa-bars";
    blockMenu.style.display = "none";
  });
});
