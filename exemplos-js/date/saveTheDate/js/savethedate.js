(function () {
  let dateEventDOM = document.querySelector(".hero-content h1 span").innerText;

  const today = new Date();
  const dateEvent = getData(dateEventDOM);

  let left = dateEvent.getTime() - today.getTime();

  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;

  const daysleft = parseInt(left / ONE_DAY);
  left = left - daysleft * ONE_DAY;

  const hoursleft = parseInt(left / ONE_HOUR);
  left = left - hoursleft * ONE_HOUR;

  const minuteleft = parseInt(left / ONE_MINUTE);
  left = left - minuteleft * ONE_MINUTE;

  const secondsleft = parseInt(left / 1000);
  addEvent(daysleft, hoursleft, minuteleft, secondsleft);

  function addEvent(d, h, m, s) {
    let p = document.createElement("p");
    p.textContent = `Contagem regressiva: ${d} dias ${h} horas ${m} minutos ${s} segundos`;
    document.querySelector(".hero-content").appendChild(p);
  }

  function getData(str) {
    const [data, horas] = str.split(" ");
    const [dia, mes, ano] = data.split("/");
    const [h, m] = horas.split("H");

    return new Date(ano, mes - 1, dia, h, m);
  }
})();
