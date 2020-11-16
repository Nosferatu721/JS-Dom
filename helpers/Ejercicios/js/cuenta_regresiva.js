const countdown = (id, limitDate, finaleMessage) => {
  const countBox = document.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor(
        (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((limitTime % (1000 * 60)) / (1000));
    console.log(limitTime);

    countBox.innerHTML = `<h4>Faltan ${days} dias ${hours} horas ${minutes} minutos y ${seconds} segundos </h4>`;
  }, 1000);

  setTimeout(() => {
    clearInterval(countdownTempo);
  }, 5000);
};

export default countdown;
