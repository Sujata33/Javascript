///// Level One////

//1.
const challenge = "30 Days Of JavaScript";
//2.
console.log(challenge);

//3.length of the string
console.log(challenge.length);

//4.
console.log(challenge.toUpperCase());

//5.
console.log(challenge.toLowerCase());

//6.
console.log(challenge.substring(0, 3));

//7.
console.log(challenge.substring(3, challenge.lastIndexOf("t") + 1));
console.log(challenge.substring(3, challenge.length));

//8. 
console.log(challenge.includes("Script"));//return true/false(boolean)

//9.
console.log(challenge.split(""));

//10.
console.log(challenge.split(" "));

//11.
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));

//12.
console.log(challenge.replace("JavaScript", "Python"));