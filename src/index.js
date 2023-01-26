function displayTime(event) {
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM D, YYYY hh:mm A");
  let tokyoTime = moment().tz("Asia/Tokyo").format("LLLL");
  let sydneyTime = moment().tz("Australia/Sydney").format("LLLL");
  let currentLocation = moment.tz.guess();
  let currentTime = moment.tz(`${currentLocation}`).format("LLLL");
  if (event.target.value.length > 1) {
    if (event.target.value === "paris") {
      alert(`It is ${parisTime} in Europe/Paris`);
    }
    if (event.target.value === "tokyo") {
      alert(`It is ${tokyoTime} in Asia/Tokyo`);
    }
    if (event.target.value === "sydney") {
      alert(`It is ${sydneyTime} in Australia/Sydney`);
    }
    if (event.target.value === "currentLocation") {
      alert(`It is currently ${currentTime} in your location.`);
    }
  }
}

let displayCity = document.querySelector("#world-clock");
displayCity.addEventListener("change", displayTime);

function darkMode() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
  if (div.container.classList.contains("dark-theme")) {
    div.container.classList.remove("dark-theme");
  } else {
    div.container.classList.add("dark-theme");
  }
}
let themeButton = document.querySelector(".dark-mode");
themeButton.addEventListener("click", darkMode);

function displayTimesAndDates(event) {
  let displayAuckland = document.querySelector("#auckland");
  let aucklandTimeElement = displayAuckland.querySelector(".time");
  let aucklandDateElement = displayAuckland.querySelector(".date");
  let aucklandTime = moment().tz("Pacific/Auckland");
  aucklandTimeElement.innerHTML = `${aucklandTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  aucklandDateElement.innerHTML = `${aucklandTime.format("ddd. MMM. D, YYYY")}`;
  let displayCapetown = document.querySelector("#capetown");
  let capetownTimeElement = displayCapetown.querySelector(".time");
  let capetownDateElement = displayCapetown.querySelector(".date");
  let capetownTime = moment().tz("Africa/Windhoek");
  capetownTimeElement.innerHTML = `${capetownTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  capetownDateElement.innerHTML = `${capetownTime.format("ddd.MMM. D, YYYY")}`;
  let displayVancouver = document.querySelector("#vancouver");
  let vancouverTimeElement = displayVancouver.querySelector(".time");
  let vancouverDateElement = displayVancouver.querySelector(".date");
  let vancouverTime = moment().tz("America/Vancouver");
  vancouverTimeElement.innerHTML = `${vancouverTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  vancouverDateElement.innerHTML = `${vancouverTime.format(
    "ddd. MMM. D, YYYY"
  )}`;
}

function addCityElement(event) {
  let addCityTimezone = event.target.value;
  let addCityName = addCityTimezone.replace("_", " ").split("/")[1];
  let addCityTime = moment().tz(addCityTimezone);
  let addCityElement = document.querySelector("#selected-city");
  addCityElement.innerHTML = `<div>
          <h2>${addCityName}</h2>
          <div class="date">${addCityTime.format("ddd. MMM. D, YYYY")}</div>
        </div>
        <div class="time">${addCityTime.format(
          "hh:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>`;
}

let addSelectElement = document.querySelector("#world-clock");
addSelectElement.addEventListener("change", addCityElement);

displayTimesAndDates();
setInterval(displayTimesAndDates, 1000);
