const d = document;
const w = window;

const buttonUpp = (id) => {
  const btnUpp = d.querySelector(id);
  d.addEventListener("scroll", () => {
    let scrollTop = w.pageYOffset;
    if (scrollTop > 600) {
      btnUpp.classList.remove("uppHidden");
    } else {
      btnUpp.classList.add("uppHidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(id) || e.target.matches(`${id} *`)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
};

export default buttonUpp;
