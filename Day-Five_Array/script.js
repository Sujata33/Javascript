//Arrays///

const array = ["a", 2, 4, "b", true, false, null, undefined, { prop: "value" }];
console.log(typeof array[7]);

//Array constructor//
const emtyArr = Array(8);

//fill() method use fill the empty array
emtyArr.fill(143);
console.log(emtyArr);

//concat()
const arr1 = [1, 2, 3, true];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
console.log(arr1.concat(arr2, arr3));

//length: length of an array(number of items).
console.log(arr1.length);

//indexOf(): check if an item exist in the array. If the item exist in the array returns index number else returns -1
console.log(arr1.indexOf(3));
console.log(arr2.indexOf(200));

//lastIndexOf(): returns the last position of the array items

console.log(arr1.lastIndexOf(true));

//includes() it returns a boolean value
console.log(arr2.includes(4));
console.log(arr1.includes(5));