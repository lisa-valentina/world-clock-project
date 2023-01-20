"It is Saturday, October 8, 2023 2:51 PM in Europe/Paris";

function displayTime(event) {
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM D, YYYY hh:mm A");
  let tokyoTime = moment().tz("Asia/Tokyo").format("LLLL");
  let sydneyTime = moment().tz("Australia/Sydney").format("LLLL");
  let currentLocation = moment.tz.guess();
  let currentTime = moment.tz(`${currentLocation}`);
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
