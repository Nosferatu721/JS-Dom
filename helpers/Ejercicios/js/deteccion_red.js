const d = document,
  w = window,
  n = navigator;

const networkStatus = () => {
  const isOnLine = () => {
    const divsito = d.createElement("div");
    if (n.onLine) {
      divsito.textContent = "Conectado Prr";
      divsito.classList.add("online");
      divsito.classList.remove("offline");
    } else {
      divsito.textContent = "Desconectado Prr";
      divsito.classList.add("offline");
      divsito.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", divsito);
    setTimeout(() => d.body.removeChild(divsito), 3000);
  };
  // console.log(n.onLine);
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
};
export default networkStatus;
