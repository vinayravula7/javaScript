// DATE global object

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "jun",
  "july",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const date = new Date();

const todayDate = date;

const today = date.getDate();
console.log(today);

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

const year = date.getFullYear();
console.log(year);

const sentence = ` ${months[month]}  ${today} ${days[day]} ${year}`;
console.log(sentence);

document.body.innerHTML = sentence;
