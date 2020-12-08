
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

const reindeer = document.querySelector(".reindeer");
const pirate = document.querySelector(".pirategingerbread");
const pixelpresents = document.querySelector(".pixelpresents");
const snowdog = document.querySelector(".snowdog");
const rabbit = document.querySelector(".rabbit");
const candycane = document.querySelector(".candycane");
const candymug = document.querySelector(".candymug");
const bouncesnow = document.querySelector(".bouncesnow");
const yulelog = document.querySelector(".yulelog");
const gingerbread = document.querySelector(".gingerbread");
const snowman = document.querySelector(".snowman");
const cocoa = document.querySelector(".cocoa");
const cupcake = document.querySelector(".cupcake");
const fallingpresent = document.querySelector(".fallingpresent");
const gingerbreadhouse = document.querySelector(".gingerbreadhouse");
const helloreindeer = document.querySelector(".helloreindeer");
const leglamp = document.querySelector(".leglamp");
const ornaments = document.querySelector(".ornaments");
const giftpresent = document.querySelector(".giftpresent");
const wreath = document.querySelector(".wreath");
const snowmanappear = document.querySelector(".snowmanappear");
const sleigh = document.querySelector(".sleigh");

function startConfetti(){body.classList.add("bodyConfetti");}
function startSnow(){body.classList.add("bodySnow");}
function startStars(){body.classList.add("bodyStars");}
function dayOne(){pirate.classList.add("pirateNow");}
function dayTwo(){pixelpresents.classList.add("pixelPresentsNow");}
function dayThree(){snowdog.classList.add("snowdogNow");}
function dayFour(){rabbit.classList.add("rabbitNow");}
function dayFive(){candycane.classList.add("candycaneNow");}
function daySix(){candymug.classList.add("candymugNow");}
function daySeven(){bouncesnow.classList.add("bouncesnowNow");}
function dayNine(){yulelog.classList.add("yulelogNow");}
function dayTen(){gingerbread.classList.add("gingerbreadNow");}
function dayEleven(){snowman.classList.add("snowmanNow");}
function dayThirteen(){cocoa.classList.add("cocoaNow");}
function dayFourteen(){cupcake.classList.add("cupcakeNow");}
function dayFifteen(){fallingpresent.classList.add("fallingpresentNow");}
function daySixteen(){gingerbreadhouse.classList.add("gingerbreadhouseNow");}
function daySeventeen(){helloreindeer.classList.add("helloreindeerNow");}
function dayEighteen(){leglamp.classList.add("leglampNow");}
function dayNineteen(){ornaments.classList.add("ornamentsNow");}
function dayTwentyOne(){giftpresent.classList.add("giftpresentNow");}
function dayTwentyTwo(){wreath.classList.add("wreathNow");}
function dayTwentyThree(){snowmanappear.classList.add("snowmanappearNow");}
function dayTwentyFour(){reindeer.classList.add("reindeerNow");}
function dayTwentyFive(){sleigh.classList.add("sleighNow");
dayTwentyFour(); dayTwentyThree(); dayTwentyTwo(); dayTwentyOne(); dayNineteen(); dayEighteen();
daySeventeen(); daySixteen(); dayFifteen(); dayFourteen(); dayThirteen(); startSnow(); dayEleven(); dayTen(); dayNine(); 
daySeven(); daySix(); dayFive(); dayFour(); dayThree(); dayTwo(); dayOne();}


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
if (month === "December" && date === 1){one.addEventListener("click", dayOne);}
if (month === "December" && date === 2){two.addEventListener("click", dayTwo);}
if (month === "December" && date === 3){three.addEventListener("click", dayThree);}
if (month === "December" && date === 4){four.addEventListener("click", dayFour);}
if (month === "December" && date === 5){five.addEventListener("click", dayFive);}
if (month === "December" && date === 6){six.addEventListener("click", daySix);}
if (month === "December" && date === 7){seven.addEventListener("click", daySeven);}
if (month === "December" && date === 8){eight.addEventListener("click", startConfetti);}
if (month === "December" && date === 9){nine.addEventListener("click", dayNine);}
if (month === "December" && date === 10){ten.addEventListener("click", dayTen);}
if (month === "December" && date === 11){eleven.addEventListener("click", dayEleven);}
if (month === "December" && date === 12){twelve.addEventListener("click", startSnow);}
if (month === "December" && date === 13){thirteen.addEventListener("click", dayThirteen);}
if (month === "December" && date === 14){fourteen.addEventListener("click", dayFourteen);}
if (month === "December" && date === 15){fifteen.addEventListener("click", dayFifteen);}
if (month === "December" && date === 16){sixteen.addEventListener("click", daySixteen);}
if (month === "December" && date === 17){seventeen.addEventListener("click", daySeventeen);}
if (month === "December" && date === 18){eighteen.addEventListener("click", dayEighteen);}
if (month === "December" && date === 19){nineteen.addEventListener("click", dayNineteen);}
if (month === "December" && date === 20){twenty.addEventListener("click", startStars);}
if (month === "December" && date === 21){twentyone.addEventListener("click", dayTwentyOne);}
if (month === "December" && date === 22){twentytwo.addEventListener("click", dayTwentyTwo);}
if (month === "December" && date === 23){twentythree.addEventListener("click", dayTwentyThree);}
if (month === "December" && date === 24){twentyfour.addEventListener("click", dayTwentyFour);}
if (month === "December" && date === 25){twentyfive.addEventListener("click", dayTwentyFive);}