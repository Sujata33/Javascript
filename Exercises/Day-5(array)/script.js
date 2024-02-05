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
const allItem = itCompanies.join(", ");
console.log(allItem);

//11.

//12.
console.log(itCompanies.join(" "));

//13.


//14.

//15.
console.log(itCompanies.sort());

//16.
console.log(itCompanies.reverse());

//17.
console.log(itCompanies.slice(0, 3));

//18.

//19.
console.log(itCompanies.slice(Math.floor(num / 2)));