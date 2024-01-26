/// Date object ////
const toDay = new Date();

console.log(toDay);

const date = toDay.getDate();
// const date = 21;
let day = toDay.getDay();
let month = toDay.getMonth();
const year = toDay.getFullYear();
const hours = toDay.getHours();
const min = toDay.getMinutes();

//for Day
if (day === 0) {
    day = "Sunday";
}
else if (day === 1) {
    day = "Monday";
}
else if (day === 2) {
    day = "Tuesday";
}
else if (day === 3) {
    day = "Wednesday";
}
else if (day === 4) {
    day = "Thursday";
}
else if (day === 5) {
    day = "Friday";
}
else if (day === 6) {
    day = "Saturday";
}

//for month
if (month === 0) {
    month = "January";
}
else if (month === 1) {
    month = "February";
}
else if (month === 2) {
    month = "March";
}
else if (month === 3) {
    month = "April";
}
else if (month === 4) {
    month = "May";
}
else if (month === 5) {
    month = "June";
}
else if (month === 6) {
    month = "July";
}

//for day
let abc;
if (date % 10 === 1) {
    abc = "st";
}
else if (date % 10 === 2) {
    abc = "nd";
}
else if (date % 10 === 3) {
    abc = "rd";
}
else {
    abc = "th";
}

//1.
console.log(`The year is ${year}`);
//2.
console.log(`The month is ${month}`);
//3.
console.log(`The date is ${date}`);
//4.
console.log(`The day is ${day}`);
//5.
console.log(`The hours now is ${hours}`);
//6.
console.log(`The minutes now is ${min}`);
//8.
console.log(new Date().getTime() / 1000);

//9.
console.log(`Today is ${day}, ${month} ${date}${abc} of ${year}. Time is ${hours}:${min} PM now.`);

function a() {

    for (let i = 1; i < 5; i++) {
        return i *= i;
    }
}
console.log(a());