let index = "";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        if (j % 2 === 0) {
            index += "#";
        } else {
            index += "*";
        }
    }
    index += "\n";
}
console.log(index);

let sum = "";
for (let i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
        sum = sum + "#";
    } else {
        sum = sum + "*";
    }
    console.log(sum);
}

console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`);
}

let sums = 0;
for (let i = 0; i <= 100; i++) {
    sums = sums + i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sums}.`);

let sumsev = 0, sumsod = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumsev = sumsev + i
    } else {
        sumsod = sumsod + i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumsev}. And the sum of all odds from 0 to 100 is ${sumsod}.`);
const arr = [sumsev, sumsod];
console.log(arr);

const random_arr = [];
for (let i = 0; i < 5; i++) {
    let ran = Math.floor(Math.random() * 10) + 1;
    random_arr.push(ran);
}
console.log(random_arr);

const uniqueRanArr = [];
for (let i = 5; uniqueRanArr.length < i;) {
    let unique_ran = Math.floor(Math.random() * 10) + 1;
    if (uniqueRanArr.includes(unique_ran) === false) {
        uniqueRanArr.push(unique_ran);
    }
}
console.log(uniqueRanArr);

let ranString = "abcdefghijklmnopqrstuvwxyz0123456789";
let idStr = "";
for (let i = 0; i < 6; i++) {
    let charRan = Math.floor(Math.random() * ranString.length);
    ranString[charRan];
    idStr = idStr + ranString[charRan];
}
console.log(idStr);


let ranStr = "abcdef0123456789";
let idString = "#";
// let a = parseInt(prompt("Enter a number"));

for (let i = 0; i < 6; i++) {
    let ranany = Math.floor(Math.random() * ranStr.length);
    idString = idString + ranStr[ranany];

}


console.log(idString);


let ranRgb1 = Math.floor(Math.random() * 255);
let ranRgb2 = Math.floor(Math.random() * 255);
let ranRgb3 = Math.floor(Math.random() * 255);
console.log(`rgb(${ranRgb1},${ranRgb2},${ranRgb3})`);

// document.body.style.backgroundColor = `rgb(${ranRgb1},${ranRgb2},${ranRgb3})`;
document.body.style.backgroundColor = idString;

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
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const debTechs = webTechs.slice(0);

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const countriesUpper = [];

for (let i = 0; i < countries.length; i++) {
    countriesUpper.push(countries[i].toUpperCase());
}
console.log(countriesUpper);

const lenCountries = [];
for (let country of countries) {
    lenCountries.push(country.length);
}
console.log(lenCountries);

const arrayCountries = [];
for (let country of countries) {
    arrayCountries.push([country, country.slice(0, 3).toUpperCase(), country.length]);
}
console.log(arrayCountries);

const countryLand = ['Finland', 'Ireland', 'Iceland'];
const landCountry = [];
const landCountry2 = [];
for (let country of countryLand) {
    if (country.includes("land")) {
        landCountry.push(country);
    } else {
        landCountry2.push(country);
    }
}
console.log(landCountry);
console.log(landCountry2);
const max = countries[0];
for (let country of countries) {
    if (max.length < country.length) {
        console.log(country);
    }
}

const fiveChar = [];
for (let country of countries) {
    if (country.length === 5) {
        fiveChar.push(country);
    }
}

console.log(fiveChar);

console.log(webTechs);
const longest = debTechs[0];
for (let company of debTechs) {
    if (longest.length < company.length) {
        console.log(company);
    }
}