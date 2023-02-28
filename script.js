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



