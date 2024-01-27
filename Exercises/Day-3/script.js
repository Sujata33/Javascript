////Level 1///

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