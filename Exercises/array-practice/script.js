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

//level 1//
//1.
const arr = [];
//2.
const arr1 = Array(8);
console.log(arr1);
//3.
const lengthArray = arr1.length;
console.log(lengthArray);
//4.
const arr2 = [4, 6, 8, "s", 0, 9, 7];
const fstItem = arr2[0];
const lastItem = arr2[arr2.length - 1];
const midItem = arr2[Math.round(arr2.length / 2) - 1];
console.log(`First item ${fstItem}.\nlast item ${lastItem}.\nmiddle item ${midItem}. `);
//5.
const mixedDataTypes = ["sujata", true, 143, null, undefined, NaN, Object];
console.log(mixedDataTypes);
//6.
const itCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ");
console.log(itCompanies);
console.log(`The number of company is ${itCompanies.length}`);
console.log(`first ${itCompanies[0]}\nmiddle ${itCompanies[Math.round(itCompanies.length) - 1]}\nlast ${itCompanies[itCompanies.length - 1]}`);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

console.log(`${itCompanies.slice(0, itCompanies.length - 1).join(", ")} and ${itCompanies.slice(itCompanies.length - 1).join("")} are big IT companies.`);
if (itCompanies.includes("Amazon")) {


    console.log("Amazon");
} else {
    console.log("not found");
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log(itCompanies.slice(itCompanies.length - 3));


// itCompanies.shift();
console.log(itCompanies);

// itCompanies.splice(Math.round(itCompanies.length / 2) - 1, 1)

console.log(itCompanies);

// itCompanies.pop();
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);


let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const abc = text.replaceAll(/[,.]/g, "");
console.log(abc);
console.log(abc.split(" "));

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("Meat");

shoppingCart.push("Sugar");

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");

console.log(shoppingCart);


if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
    console.log(countries);
}

if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    webTechs.push("Sass");
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());

console.log(`Maximum number is ${ages[ages.length - 1]}\nMinimum number is ${ages[0]}`);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}

console.log("sum = " + sum);
console.log(`Average is ${sum / ages.length}`);

console.log(`Range of the ages ${ages[ages.length - 1] - ages[0]}`);

console.log(Math.abs(ages[0] - sum / ages.length) === Math.abs(ages[ages.length - 1] - sum / ages.length));

console.log(countries.slice(0, 10));

console.log(countries[Math.round(countries.length / 2) - 1]);
const index = countries.length / 2;
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, index);
    secondHalf = countries.slice(index + 1, countries.length);
    console.log(firstHalf.length);
    console.log(secondHalf.length);
} else {
    console.log();
}


