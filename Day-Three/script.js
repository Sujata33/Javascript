//// Changing Data Types

//Casting

//casting from String to Number

const susu = "33";
console.log(typeof susu);

const ss = parseInt(susu);
console.log(ss);
console.log(typeof ss);

console.log(Number(susu));
console.log(+susu);


//number method/function
//isInteger() method run koranor jonno Number.isInteger(argument) likhte hoi
console.log(Number.isInteger(ss));

//isNaN()

const str = "sujata";
console.log(isNaN(str));

//toFixed()

const num = 45.67356;
console.log(num.toFixed(3));

//toString()

const str2 = ss.toString();
console.log(str2);//toString() don't pass argument in this method
console.log(typeof str2);

console.log(3 + 5 + "2" + 6); //concatinate
console.log("9" - 3);// type conversion

//Math Object

const PI = Math.PI;
console.log(PI);

const gravity = 9.81;

console.log(Math.ceil(gravity));

console.log(Math.round(gravity));

console.log(Math.floor(gravity));

console.log(Math.max(-5, 3, 20, 8, 4));

console.log(Math.min(-6, 8, 90, 54, 234));

console.log(Math.sqrt(100));

console.log(Math.cbrt(100));

console.log(Math.sin(60));

console.log(Math.pow(3, 2));
// Template literal
const string = `square root of 100 is ${Math.sqrt(100)}`;
console.log(string);

const str1 = `${Math.cbrt(27)} is the cube root of 27`;
console.log(str1);

const lang = "Javascript";
console.log(`I am learning ${lang}`);

const boy = 2001;
console.log(`I am ${2024 - boy} years old`);

console.log(boy.toString());