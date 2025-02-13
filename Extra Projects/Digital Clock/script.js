function updateClock() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById(
    "digitalClock"
  ).innerText = `${hours}:${minutes}:${seconds}`;
}

function updateDate() {
  let now = new Date();
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  let day = days[now.getDay()];
  let date = String(now.getDate()).padStart(2, "0");
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  document.getElementById(
    "dateDisplay"
  ).innerText = `${day} | ${date} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
updateDate();
