const d = document;

const contactFormValidations = () => {
  const formsito = d.querySelector(".contact-form"),
    // Solo captura los inputs requeridos
    inputs = d.querySelectorAll(".contact-form *[required]");

  // console.log(inputs);

  inputs.forEach((inp) => {
    const spansito = d.createElement("span");
    spansito.id = inp.name;
    spansito.textContent = inp.title;
    spansito.classList.add("contact-form--error", "none");
    // console.log(spansito);
    inp.insertAdjacentElement("afterend", spansito);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let input = e.target,
        pattern = input.pattern || input.dataset.pattern;

      if (pattern && input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec(input.value)
          ? d.getElementById(input.name).classList.add("isActive")
          : d.getElementById(input.name).classList.remove("isActive");
      }
      if (!pattern) {
        return input.value === ""
          ? d.getElementById(input.name).classList.add("isActive")
          : d.getElementById(input.name).classList.remove("isActive");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    // e.preventDefault();
    const $loader = d.querySelector(".contact-form--loader"),
      $response = d.querySelector(".contact-form--response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      formsito.reset()
    }, 3000);
  });
};

export default contactFormValidations;
