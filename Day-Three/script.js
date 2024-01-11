//// Changing Data Types

//Casting

//casting from String to Number

const susu = "33";
console.log(typeof susu);

const ss= parseInt(susu);
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