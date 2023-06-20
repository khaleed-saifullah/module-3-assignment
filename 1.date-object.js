let currDate = new Date();
let year = currDate.getFullYear();
let month = currDate.getMonth() + 1;
let day = currDate.getDate();

let currDateString = `${year}-${month}-${day}`;

function getWeekDate(currDate) {
  let date = new Date(currDate);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return dayOfWeek;
}

console.log(`Today is: ${getWeekDate(currDateString)}`);
