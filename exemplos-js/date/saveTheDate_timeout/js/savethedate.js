(function () {
  let dateEventDOM = document.querySelector(".hero-content h1 span").innerText;
  let p = document.createElement("p");
  document.querySelector(".hero-content").appendChild(p);
  const dateEvent = getData(dateEventDOM);
  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;

  const timeEvent = setInterval(function () {
    let today = new Date();

    let left = dateEvent.getTime() - today.getTime();

    let daysleft = parseInt(left / ONE_DAY);
    left = left - daysleft * ONE_DAY;

    let hoursleft = parseInt(left / ONE_HOUR);
    left = left - hoursleft * ONE_HOUR;

    let minuteleft = parseInt(left / ONE_MINUTE);
    left = left - minuteleft * ONE_MINUTE;

    let secondsleft = parseInt(left / 1000);

    if (
      daysleft === 0 &&
      (hoursleft === 0) & (minuteleft === 0) &&
      secondsleft === 0
    ) {
      clearInterval(timeEvent);
    }

    addEvent(daysleft, hoursleft, minuteleft, secondsleft);
  }, 1000);

  function addEvent(d, h, m, s) {
    p.textContent = `Contagem regressiva: ${d} dias ${h} horas ${m} minutos ${s} segundos`;
  }

  function getData(str) {
    const [data, horas] = str.split(" ");
    const [dia, mes, ano] = data.split("/");
    const [h, m] = horas.split("H");

    return new Date(ano, mes - 1, dia, h, m);
  }
})();
