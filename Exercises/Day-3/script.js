////Level 1///
/*
//1.
const firstName = "Sujata";
const lastName = "Ghosh";
const country = "India";
const age = 23;
const isMarried = false;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);

//2.
console.log(typeof "10" === typeof 10);

//3.
console.log(parseInt("9.8"));
console.log(parseInt("9.8") === 10);

//4.
//i. Three JavaScript statement for truthy value
if ("abc") {
    console.log(true);
}

const a = true;
if (a) {
    console.log("Truthy Value");
}

const b = true;
if (b) {
    console.log("Truthy Value");
}
//ii. Three JavaScript statement for falsy value
const r = null;
if (!r) {
    console.log("Not false");
}

const r1 = NaN;
if (!r1) {
    console.log("Not NaN");
}

const r2 = undefined;
if (!r2) {
    console.log("Not undefined");
}

//5.
//i.
console.log(4 > 3);
//ii.
console.log(4 >= 3);
//iii.
console.log(4 < 3);
//iv.
console.log(4 <= 3);
//v.
console.log(4 == 4);
//vi.
console.log(4 === 4);
//vii.
console.log(4 != 4);
//viii.
console.log(4 !== 4);
//ix.
console.log(4 != '4');
//x.
console.log(4 == '4');
//xi.
console.log(4 === '4');
//xii.
console.log("python".length !== "jargon".length);

//6.
//i.
console.log(4 > 3 && 10 < 12);

//7.
const isToday = new Date();

//i.
const year = `This is ${isToday.getFullYear()}`;
console.log(year);

//ii.
const month = `This is month ${isToday.getMonth()} today as a number`;
console.log(month);

//iii.
const date = `This is ${isToday.getDate()}`;
console.log(date);

//iv.
const day = `This is day ${isToday.getDay()} today as a number`;
console.log(day);

//v.
const hr = `The hours is ${isToday.getHours()} now`;
console.log(hr);

//vi.
const min = `The minutes is ${isToday.getMinutes()} now`;
console.log(min);

//vii.
const seconds = `The numbers of seconds elapsed from 1 January 1970 to now is ${isToday.getTime() / 1000}`;
console.log(seconds);*/

////Level 2///

/*//1.
const base = parseInt(prompt("enter base:"));
// base = parseInt(base);
// console.log(typeof b1);
const height = parseInt(prompt("enter height:"));
const area = 0.5 * base * height;
// console.log("Enter base: " + base + "\nEnter height: " + height + "\nEnter area: "+ area);
console.log(`Enter base: ${base}\nEnter height: ${height}\nEnter area: ${area}`);
// console.log("Enter base: " + base);
// console.log("Enter height: " + height);
// console.log("Enter area: " + area);

//2.
const a = parseInt(prompt("Enter side a"));
const b = parseInt(prompt("Enter side b"));
const c = parseInt(prompt("Enter side c"));
const peri = a + b + c;
console.log(`Enter side a: ${a}\nEnter side b: ${b}\nEnter side c: ${c}\nThe perimeter of the triangle is ${peri}`);
//3.
const len = parseInt(prompt("Enter length"));
const width = parseInt(prompt("Enter width "));
const area1 = len * width;
const peri1 = 2 * (len + width);
console.log(`Enter length: ${len}\nEnter width: ${width}\nArea of rectangle ${area1} and the Perimeter of rectangle ${peri1}`);
//4.
const r = parseInt(prompt("Enter radius"));
const area2 = Math.PI * r * r;
const circum = 2 * Math.PI * r;
console.log(`Enter radius: ${r}\nArea of circle is ${area2}\nCircumference of circle is ${circum}`);

//5.

//6.

//7.

//8.

//9.
const hr = parseInt(prompt("Enter hours"));
const rate = parseInt(prompt("Enter rate per hour"));
const earn = hr * rate;
console.log(`Enter Hours: ${hr}\nEnter rate per hour: ${rate}\nYour weekly earning is ${earn}`);

//10.
const name = prompt("Enter Your Name");
if (name.length >= 7) {
    console.log("your name is long.");
} else {
    console.log("your name is short.");
}

//11.
let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Family Name");
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else if (firstName.length === lastName.length) {
    console.log(`Your first name, ${firstName} is equal to your family name, ${lastName}`);
} else {
    console.log(`Your first name, ${firstName} is smaller than your family name, ${lastName}`);
}

//12.
let myAge = parseInt(prompt("Enter My Age"));
let yourAge = parseInt(prompt("Enter Your Age"));
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log(`I am ${yourAge - myAge} years younger than you.`);
}

//13.
const birth = parseInt(prompt("Enter birth year"));
const age = new Date().getFullYear();
const totalAge = age - birth;
if (totalAge >= 18) {
    console.log(`You are ${totalAge} You are old enough to drive.`);
} else {
    console.log(`You are ${totalAge} You will be allowed to drive after ${18 - totalAge} years.`);
}

//14.
const year = parseInt(prompt("Enter number of years you live"));
const sec = year * 365 * 24 * 3600;
console.log(`Enter number of years you live: ${year}\nYou lived ${sec} seconds`);


///Level 3///
//1.
const year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let date = new Date().getDate();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
if (month < 10) {
    month = '0' + month
}
if (date < 10) {
    date = '0' + date
}
if (hour < 10) {
    hour = '0' + hour
}
if (minutes < 10) {
    minutes = '0' + minutes
}
console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
*/