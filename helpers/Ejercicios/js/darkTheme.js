const d = document;
const w = window;

const darkTheme = (btn, classDark) => {
  const themeBtn = d.querySelector(btn),
    selectors = d.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "🌞";
  console.log(selectors);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if (themeBtn.textContent.trim() === sun) {
        themeBtn.textContent = moon;
        selectors.forEach((el) => el.classList.add(classDark));
      } else {
        themeBtn.textContent = sun;
        selectors.forEach((el) => el.classList.remove(classDark));
      }
    }
  });
};

export default darkTheme;
