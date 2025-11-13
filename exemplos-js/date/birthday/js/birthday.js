function quantoFaltaPara(m, d) {
  let today = new Date();
  today.setMinutes(0);
  today.setHours(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let yearCurrent = today.getFullYear();

  let dateBirthDay = new Date(yearCurrent, m - 1, d);

  let todayTS = +today;
  let dateBirthDayTS = +dateBirthDay;

  if (dateBirthDayTS < todayTS) {
    dateBirthDay.setFullYear(++yearCurrent);
    dateBirthDayTS = +dateBirthDay; // tempo que falta para chegar na data de aniversario
  }

  const ONE_DAY = 24 * 60 * 60 * 1000;

  const resta = dateBirthDayTS - todayTS

  return  parseInt(resta / ONE_DAY)

}
