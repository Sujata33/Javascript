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

