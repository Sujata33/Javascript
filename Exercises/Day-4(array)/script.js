///level 1///
/*
//1.
const emptyArray = [];

//2.
const arr = Array(6);
console.log(arr);

//3.
const lengthArray = arr.length;
console.log(lengthArray);

//4.
const arr1 = [5, 7, 8, true, "apple"]
const firstItem = arr1[0];
console.log("First item of arr1 is", firstItem);
console.log(arr1.length);
const middleItem = arr1[Math.floor((arr1.length) / 2)];
console.log("Middle item of arr1 is", middleItem);
const lastItem = arr1[arr1.length - 1];
console.log("Last item of arr1 is", lastItem);
// arr1.length = 0;
// console.log(arr1[0]); // it returns undefinede

// const p = console.log;
// p("hghghj");

//5.
const mixedDataTypes = [2, true, "suju", null, 4, "sushu", "Array"];
console.log(mixedDataTypes, "Lenth of mixedDataTypes is", mixedDataTypes.length);

//6.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7.
console.log(itCompanies);

//8.
const num = itCompanies.length;
console.log("The number of companies in this array", num);

//9.
const firstCom = itCompanies[0];
console.log("First item of itCompanies is", firstCom);
console.log(itCompanies.length);
const middleCom = itCompanies[Math.floor((arr1.length) / 2)];
console.log("Middle item of itCompanies is", middleCom);
const lastCom = itCompanies[itCompanies.length - 1];
console.log("Last item of itCompanies is", lastCom);

//10.

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//11.
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//12.
const arr4 = itCompanies.slice(0, itCompanies.length - 1)
console.log(arr4.join(", "));
console.log(`${arr4.join(", ")} and ${itCompanies[itCompanies.length - 1]} are a big IT companies.`);

const suju = ["as", "is", 5, 6, "it"];
console.log(suju.toString());
console.log(`${suju}`);

//13.
if (itCompanies.includes("NIC")) {
    console.log("NIC");
} else {
    console.log("Company is not found");
}

//14.
const ami = "tumi";

// if () {

// }

//15.
// console.log(itCompanies.sort());

//16.
// console.log(itCompanies.reverse());

//17.
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(3));

//18.
const lastThree = itCompanies.length - 3;
console.log(typeof lastThree);
console.log(itCompanies.slice(lastThree, itCompanies.length));
console.log(itCompanies.slice(lastThree));

//19.
console.log(itCompanies.slice(Math.floor(num / 2)));

//20.
// console.log(itCompanies.shift());

//21.
const mItem = Math.floor(itCompanies.length / 2);
console.log(itCompanies.splice(mItem, 1));
console.log(itCompanies);

//22.
// console.log(itCompanies.pop());
console.log(itCompanies);

//23.
const emptyArr = itCompanies.splice(0, itCompanies.length)
console.log(itCompanies);
*/

/////Level 2////
/*
//1.
console.log(webTechs);
console.log(countries);

//2.
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const pucntuation = text.match(/[,.]/g);
console.log(pucntuation);
const textRem = text.replaceAll(/[,.]/g, "");
console.log(textRem);
const array = textRem.split(" ");
console.log(array);

console.log("Number of words are", array.length);*/

//3.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//i.
shoppingCart.unshift("Meet");
console.log(shoppingCart);

//ii.
shoppingCart.push("Sugar");
console.log(shoppingCart);

//iii.
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

//iv.
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
console.log(shoppingCart);

//4.

if (countries.indexOf("Ethiopia") !== -1) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
    console.log(countries);
}

//5.

if (webTechs.includes("Sass")) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push("Sass");
    console.log(webTechs);
}

//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

//level 3///

//1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//i.
console.log(ages.sort());


const max = ages[ages.length - 1];
console.log(`Maximum age in the array is ${max}`);

const min = ages[0];
console.log(`Maximum age in the array is ${min}`);

//iii.
const sum = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9];

const avg = sum / ages.length;

console.log(`The average age is ${avg}`);

//iv.
console.log(`Range of the ages ${max - min}`);

//v.
console.log(Math.abs(min - avg) === Math.abs(max - avg));

//2.
const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

//3.
console.log(`Middle country is ${countries[Math.floor(countries.length / 2) - 1]}`);

//4.
let firstHalf, secondHalf;
const index = countries.length / 2;
if (countries.length % 2 === 0) {

    firstHalf = countries.slice(0, index);
    secondHalf = countries.slice(index, countries.length);
    console.log(firstHalf.length);
    console.log(secondHalf.length);
} else {
    firstHalf = countries.slice(0, index + 1);
    secondHalf = countries.slice(index + 1, countries.length);
    console.log(firstHalf.length);
    console.log(secondHalf.length);
}