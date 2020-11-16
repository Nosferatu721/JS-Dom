const d = document;
const w = window;

const buttonUpp = () => {
  d.addEventListener("load", () => {
    let scroll = w.scrollY;
    if (scroll > 600) {
      console.log(scroll);
    }
  });
};

export default buttonUpp;
