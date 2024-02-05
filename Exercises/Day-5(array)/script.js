///level 1///

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