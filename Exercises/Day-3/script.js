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

//1.
const base = prompt("enter base:");
const height = prompt("enter height:");
const area = 0.5 * base * height;
console.log("Enter base: " + base);
console.log("Enter height: " + height);
console.log("Enter area: " + area);

//2.
const a = prompt("Enter side a");
const b = prompt("Enter ")