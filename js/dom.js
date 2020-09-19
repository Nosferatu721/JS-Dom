console.log("*** Elementos Del DOM ***");

// console.log(document);
// console.log(document.head);
// console.log(document.body);

// ---------------------
// Selectores Mas Usados
// ---------------------
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));

// document.querySelectorAll("a").forEach((element) => {
//   console.log(element.textContent);
// });
// document
//   .querySelectorAll("a")
//   .forEach((element) => console.log(element.textContent));

// console.log(document.querySelector(".card"));
// document.querySelectorAll(".card").forEach((item) => console.log(item));
// // Array.from(document.querySelectorAll(".card")).map((o) => console.log(o));

// console.log(document.querySelectorAll("#menu li"));

// ---------------------------
// Atributos y Data-Attributes
// ---------------------------

// Hay dos maneras, la mejor es GetAttribute
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));

// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// const linkDOM = document.querySelector(".link-dom");
// linkDOM.setAttribute("target", "_blank");

// console.log(linkDOM.style.backgroundColor);

// textContent para insertar texto normal
// innerHTML para insertar codigo HTML5
// linkDOM.textContent = "Buenas";

// ------------
// Acceder a Hijos Dom
// ------------

// const CARDS = document.querySelector(".cards");

// console.log(CARDS.children);
// console.log(CARDS.children[3]);
// console.log(CARDS.parentElement);
// console.log(CARDS.firstElementChild);

// ---
// DOM
// ---

// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };
