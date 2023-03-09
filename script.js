/**
 * function gives today's date
 */

function getTodaysDate(){
  let date = new Date();
  let currentDate = date.getDate();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  return {currentDate, currentMonth, currentYear};
}

// display today's date
const h3 = document.createElement("h3");
document.body.appendChild(h3);
let displayDate = getTodaysDate();
h3.innerText = `Today's date is ${displayDate.currentDate}/${displayDate.currentMonth}/${displayDate.currentYear}`;

/**
 * Returns the current time as an object with hour, minute, and second properties.
 * @return {object} The current time object.
 */
function getTime() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
  };
}

// Display the current time on the page
const timeEle = document.createElement("h3");
const time = getTime();
timeEle.textContent = `${time.hours}:${time.minutes}:${time.seconds}`;
document.body.appendChild(timeEle);





