// const btnMenu = document.getElementById("btnMenu");
// const btnMenuIcon = document.querySelector("#btnMenu i");
// const blockMenu = document.getElementById("blockMenu");
// const blockMenuOption = document.querySelectorAll(".link");

import buttonUpp from "./button_upp.js";
import { default as countdown } from "./cuenta_regresiva.js";

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

document.addEventListener("DOMContentLoaded", () => {
  //----------------------
  // Ejercicio 1 - Menu
  //----------------------
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

    // --------------------
    // Ejercicio 2 - Reloj
    // --------------------
    const boxReloj = document.getElementById("reloj");
    const activeReloj = document.getElementById("activar-reloj");
    const inActiveReloj = document.getElementById("desactivar-reloj");
    const activeAlarma = document.getElementById("activar-alarma");
    const inActiveAlarma = document.getElementById("desactivar-alarma");

    let clockTempo;
    let alarmTempo;

    if (e.target.matches("#activar-reloj")) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        boxReloj.innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches("#desactivar-reloj")) {
      clearInterval(clockTempo);
      activeReloj.disabled = false;
    }

    if (e.target.matches("#activar-alarma")) {
      alarmTempo = setTimeout(() => {
        console.log("Sonando Alarma :v");
        e.target.disabled = true;
      }, 2000);
    }
    if (e.target.matches("#desactivar-alarma")) {
      clearTimeout(alarmTempo);
      activeAlarma.disabled = false;
    }
  });

  // ----------------------
  // Eventos del teclado
  // ----------------------

  let x = 0,
    y = 0;
  document.addEventListener("keydown", (e) => {
    const box = document.querySelector(".container-ball"),
      ball = document.querySelector(".ball"),
      limitsBox = box.getBoundingClientRect(),
      limitsBall = ball.getBoundingClientRect();

    console.log(limitsBox);
    console.log(limitsBall);
    switch (e.code) {
      case "ArrowUp":
        e.preventDefault();
        console.log("Arriba");
        if (limitsBall.top - 50 > limitsBox.top) y--;

        break;
      case "ArrowLeft":
        console.log("Izquierda");
        if (limitsBall.left - 50 > limitsBox.left) x--;

        break;
      case "ArrowRight":
        console.log("Derecha");
        if (limitsBall.right + 50 < limitsBox.right) x++;
        break;
      case "ArrowDown":
        e.preventDefault();
        console.log("Abajo");
        if (limitsBall.bottom + 50 < limitsBox.bottom) y++;

        break;
      default:
        break;
    }
    ball.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
  });
});

// Countdown

countdown("countdown", "Nov 18, 2020 16:00:00", "Feliz Cumple");

// Button Upp

buttonUpp()