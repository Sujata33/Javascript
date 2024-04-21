///// Level One////

const challenge = "30 Days Of JavaScript";
/*//1.
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

//13.
console.log(challenge.charAt(15));

//14. //ASCII
console.log(challenge.charCodeAt("J"));

//15. 1st index of a
console.log(challenge.indexOf("a"));

//16. last index of a
console.log(challenge.lastIndexOf("a"));

//17.
const sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//18.
console.log(sentence.lastIndexOf("because"));

//19.
console.log(sentence.search("because"));

//20.
console.log(" 30 Days Of JavaScript   ".trim());

//21.
console.log(challenge.startsWith("30"));

//22.
console.log(challenge.endsWith("JavaScript"));

//23.
console.log(challenge.match(/a/g));

//24.
console.log("30 Days of ".concat("JavaScript"));

//25.
console.log(challenge.repeat(2));
*/

///// Level 2///

//1.
const quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);

//2.
const quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote2);

//3.
const check = "10" === 10 ? true : false;
console.log(check);//false

//make it equal
const a = parseInt("10");
console.log(typeof a);

const check1 = a === 10 ? true : false;
console.log(check1);

//4.
const b = parseFloat("9.8");
const check2 = b === 10 ? true : false;
console.log(check2);//return false
//Make it equal
const check3 = Math.ceil(b) === 10 ? true : false;
console.log(check3);

//5.
const check4 = "python".search("on") && "jargon".search("on") ? true : false;
console.log(check4);

//6.
const sen = "I hope this course is not full of jargon.";
console.log(sen.search("jargon") ? true : false);

//7.
const ran = Math.floor(Math.random() * (100 - 0 + 1) + 0);
console.log(ran);
//8.
const ran1 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log(ran1);
//9.
const ran2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
console.log(ran2);

//10.
const string = "JavaScript";
console.log(string.charAt(Math.floor(Math.random() * string.length)));

//11.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//12.hoche na
const sentence1 = "You cannot end a sentence with because because because is a conjunction";
const sen1 = sentence1.substring(sentence1.indexOf("because"), sentence1.lastIndexOf("is"));
console.log(sen1);

////// Level 3 /////

//1.
const sentence2 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentence2.match(/love/g));

//2.
console.log(sentence1.match(/because/g));

//3.
const sentence3 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence3.replace(/[!@#$%&;?]/g, ""));

//4.
const income = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const incomeArray = income.split(" ");
const salary = incomeArray[incomeArray.indexOf("5000")];
const bonus = incomeArray[incomeArray.indexOf("10000")];
const onlineCrs = incomeArray[incomeArray.indexOf("15000")];

const totalIncome = `Total Annual Income is = ${+salary * 12 + +bonus + +onlineCrs * 12} euro`;
console.log(totalIncome);