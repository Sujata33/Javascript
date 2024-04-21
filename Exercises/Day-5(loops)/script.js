///level
/*
//1.
let i = 0;
while (i <= 10) {
    console.log(i + ", ");
    i++;
}

do {
    console.log(i);
    i++;
} while (i <= 10);

//2.

let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

do {
    console.log(i);
    i--;
} while (i >= 0);

//3.
let n = parseInt(prompt("Enter A number"));

for (let i = 0; i <= n; i++) {
    console.log(i);
}

//4.
let sum = "";
for (let i = 0; i <= n; i++) {
    sum = sum + "#";
    console.log(sum);
}

//5.
for (let i = 0; i <= 10; i++) {
    console.log(i + "*" + i + " = " + (i * i));
}

//6.
console.log("i  i^2 i^3");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}   ${i * i * i}`);
}

//7.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//8.
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//9.
let primeNumbers = "";
for (let n = 1; n <= 100; n++) {
    let counter = 0;
    for (let i = n; i >= 1; i--) {
        if (n % i === 0) {
            counter = counter + 1;
        }
    }
    if (counter === 2) {
        primeNumbers = primeNumbers + n + " ";
    }
}
console.log("Prime numbers from 1 to 100 are :");
console.log(primeNumbers);

//10.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

//11.
let sumOdds = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i;
    }
    else {
        sumOdds = sumOdds + i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

//12.
let sumOdds = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i;
    }
    else {
        sumOdds = sumOdds + i;
    }
}
let total = [sumEven, sumOdds];
console.log(total);

//13.
let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
}
console.log(arr);

//14. Must be unique
let uniqueArr = [];
for (let i = 5; uniqueArr.length < i;) {
    let num = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (uniqueArr.includes(num) === false) {
        uniqueArr.push(num);
    }
}
console.log(uniqueArr);
let arr = [6, 8, 9];
console.log(arr.indexOf(6));
console.log(arr.indexOf(11));
console.log(arr.includes(11));

//15.
let id = "";
let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    id = id + chars[random];
}
console.log(id);

////level 2///

//1.
let id = "";
let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let a = parseInt(prompt("Enter a number"));
for (let i = 0; i <= a; i++) {
    let random = Math.floor(Math.random() * chars.length);
    id = id + chars[random];
}
console.log(id);

//2.
let hexId = "";
let hexChar = "abcdef0123456789";
for (let i = 0; i <= 5; i++) {
    let randomNo = Math.floor(Math.random() * hexChar.length);
    hexId = hexId + hexChar[randomNo];
}
console.log("#" + hexId);

//3.
let random1 = Math.floor(Math.random() * 255);
let random2 = Math.floor(Math.random() * 255);
let random3 = Math.floor(Math.random() * 255);
console.log(`rgb(${random1},${random2},${random3})`);
*/


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];


//4.
let arr = [];
for (let i = 0; i < countries.length; i++) {
    arr[i] = countries[i].toUpperCase();
}
console.log(arr);

const countriesArray = countries.slice(0);
console.log(countriesArray);
let arr1 = [];
for (const country of countries) {
    arr1.push(country.toUpperCase());
}
console.log(arr1);
let techs = [];
for (const webTech of webTechs) {
    techs.push(webTech.toLowerCase());
}
console.log(techs);

//5.
let count = [];
for (const country of countriesArray) {
    count.push(country.length);
}
console.log(count);


let webLength = [];
for (const language of webTechs) {
    webLength.push(language.length);
}
console.log(webLength);