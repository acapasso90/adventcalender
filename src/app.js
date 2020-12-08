
const body = document.querySelector("body");
const header = document.querySelector("h1");
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
function sorry(){header.innerHTML="Sorry you can't open that one today"; header.classList.add("header2");}
function merryChristmas(){ header.innerHTML="Have a happy holiday"; header.classList.remove("header2"); header.classList.add("header");}
function revertHeader(){ header.innerHTML="Click today's box for a gif(t)"; header.classList.remove("header2"); header.classList.add("header");}
function startConfetti(){body.classList.add("bodyConfetti"); revertHeader();}
function startSnow(){body.classList.add("bodySnow");  revertHeader();}
function startStars(){body.classList.add("bodyStars"); revertHeader();}
function dayOne(){pirate.classList.add("pirateNow"); revertHeader();}
function dayTwo(){pixelpresents.classList.add("pixelPresentsNow");  revertHeader();}
function dayThree(){snowdog.classList.add("snowdogNow");  revertHeader();}
function dayFour(){rabbit.classList.add("rabbitNow");  revertHeader();}
function dayFive(){candycane.classList.add("candycaneNow");  revertHeader();}
function daySix(){candymug.classList.add("candymugNow"); revertHeader();}
function daySeven(){bouncesnow.classList.add("bouncesnowNow"); revertHeader();}
function dayNine(){yulelog.classList.add("yulelogNow"); revertHeader();}
function dayTen(){gingerbread.classList.add("gingerbreadNow"); revertHeader();}
function dayEleven(){snowman.classList.add("snowmanNow"); revertHeader();}
function dayThirteen(){cocoa.classList.add("cocoaNow"); revertHeader();}
function dayFourteen(){cupcake.classList.add("cupcakeNow"); revertHeader();}
function dayFifteen(){fallingpresent.classList.add("fallingpresentNow"); revertHeader();}
function daySixteen(){gingerbreadhouse.classList.add("gingerbreadhouseNow"); revertHeader();}
function daySeventeen(){helloreindeer.classList.add("helloreindeerNow"); revertHeader();}
function dayEighteen(){leglamp.classList.add("leglampNow"); revertHeader();}
function dayNineteen(){ornaments.classList.add("ornamentsNow"); revertHeader();}
function dayTwentyOne(){giftpresent.classList.add("giftpresentNow"); revertHeader();}
function dayTwentyTwo(){wreath.classList.add("wreathNow"); revertHeader();}
function dayTwentyThree(){snowmanappear.classList.add("snowmanappearNow"); revertHeader();}
function dayTwentyFour(){reindeer.classList.add("reindeerNow"); revertHeader();}
function dayTwentyFive(){sleigh.classList.add("sleighNow");
dayTwentyFour(); dayTwentyThree(); dayTwentyTwo(); dayTwentyOne(); dayNineteen(); dayEighteen();
daySeventeen(); daySixteen(); dayFifteen(); dayFourteen(); dayThirteen(); startSnow(); dayEleven(); dayTen(); dayNine(); 
daySeven(); daySix(); dayFive(); dayFour(); dayThree(); dayTwo(); dayOne(); merryChristmas();}


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
if (month === "December" && date === 1){one.addEventListener("click", dayOne);}else {one.addEventListener("click", sorry);}
if (month === "December" && date === 2){two.addEventListener("click", dayTwo);}else {two.addEventListener("click", sorry);}
if (month === "December" && date === 3){three.addEventListener("click", dayThree);}else {three.addEventListener("click", sorry);}
if (month === "December" && date === 4){four.addEventListener("click", dayFour);}else {four.addEventListener("click", sorry);}
if (month === "December" && date === 5){five.addEventListener("click", dayFive);}else {five.addEventListener("click", sorry);}
if (month === "December" && date === 6){six.addEventListener("click", daySix);}else {six.addEventListener("click", sorry);}
if (month === "December" && date === 7){seven.addEventListener("click", daySeven);}else {seven.addEventListener("click", sorry);}
if (month === "December" && date === 8){eight.addEventListener("click", startConfetti);}else {eight.addEventListener("click", sorry);}
if (month === "December" && date === 9){nine.addEventListener("click", dayNine);}else {nine.addEventListener("click", sorry);}
if (month === "December" && date === 10){ten.addEventListener("click", dayTen);}else {ten.addEventListener("click", sorry);}
if (month === "December" && date === 11){eleven.addEventListener("click", dayEleven);}else {eleven.addEventListener("click", sorry);}
if (month === "December" && date === 12){twelve.addEventListener("click", startSnow);}else {twelve.addEventListener("click", sorry);}
if (month === "December" && date === 13){thirteen.addEventListener("click", dayThirteen);}else {thirteen.addEventListener("click", sorry);}
if (month === "December" && date === 14){fourteen.addEventListener("click", dayFourteen);}else {fourteen.addEventListener("click", sorry);}
if (month === "December" && date === 15){fifteen.addEventListener("click", dayFifteen);}else {fifteen.addEventListener("click", sorry);}
if (month === "December" && date === 16){sixteen.addEventListener("click", daySixteen);}else {sixteen.addEventListener("click", sorry);}
if (month === "December" && date === 17){seventeen.addEventListener("click", daySeventeen);}else {seventeen.addEventListener("click", sorry);}
if (month === "December" && date === 18){eighteen.addEventListener("click", dayEighteen);}else {eighteen.addEventListener("click", sorry);}
if (month === "December" && date === 19){nineteen.addEventListener("click", dayNineteen);}else {nineteen.addEventListener("click", sorry);}
if (month === "December" && date === 20){twenty.addEventListener("click", startStars);}else {twenty.addEventListener("click", sorry);}
if (month === "December" && date === 21){twentyone.addEventListener("click", dayTwentyOne);}else {twentyone.addEventListener("click", sorry);}
if (month === "December" && date === 22){twentytwo.addEventListener("click", dayTwentyTwo);}else {twentytwo.addEventListener("click", sorry);}
if (month === "December" && date === 23){twentythree.addEventListener("click", dayTwentyThree);}else {twentythree.addEventListener("click", sorry);}
if (month === "December" && date === 24){twentyfour.addEventListener("click", dayTwentyFour);}else {twentyfour.addEventListener("click", sorry);}
if (month === "December" && date === 25){twentyfive.addEventListener("click", dayTwentyFive);}else {twentyfive.addEventListener("click", sorry);}