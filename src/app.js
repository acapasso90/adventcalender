
const body = document.querySelector("body");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let ten = document.querySelector(".ten");
let eleven = document.querySelector(".eleven");
let twelve = document.querySelector(".twelve");
let thirteen = document.querySelector(".thirteen");
let fourteen = document.querySelector(".fourteen");
let fifteen = document.querySelector(".fifteen");
let sixteen = document.querySelector(".sixteen");
let seventeen = document.querySelector(".seventeen");
let eighteen = document.querySelector(".eighteen");
let nineteen = document.querySelector(".nineteen");
let twenty = document.querySelector(".twenty");
let twentyone = document.querySelector(".twentyone");
let twentytwo = document.querySelector(".twentytwo");
let twentythree = document.querySelector(".twentythree");
let twentyfour = document.querySelector(".twentyfour");
let twentyfive = document.querySelector(".twentyfive");

function startConfetti(){body.classList.add("bodyConfetti");}
function startSnow(){body.classList.add("bodySnow");}
function startStars(){body.classList.add("bodyStars");}

let now = new Date();
let date = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()]
if (month === "December" && date === 7){seven.addEventListener("click", startConfetti);}
if (month === "December" && date === 8){eight.addEventListener("click", startSnow);}
if (month === "December" && date === 9){eight.addEventListener("click", startStars);}
