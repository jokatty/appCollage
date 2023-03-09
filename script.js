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
 * Finds out current time
 * @return {object} returns hour,minute and second object
 */

function getTime(){
  let now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return {hours, minutes, seconds}
}

// Create a time element and display the current time on the page
const timeEle = document.createElement("h3");
const time = getTime();
timeEle.innerText = `${time.hours}:${time.minutes}:${time.seconds}`
document.body.appendChild(timeEle);




