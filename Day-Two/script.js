                        //**DAY TWO With Mona**//

//Logical operator with conditional statement
if(3===3 && 4>2){
    console.log("True");
}else{
    console.log("false");
}
//ternary operator
//==>condition ? iftrue : iffalse;
//==>const a = condition ? iftrue : iffalse;
let score = 80;

score >= 80 ? console.log("Excellent") : console.log("Good");

const result = score >= 80 ? "Excellent" : "Good";
console.log(result);

let scor = 70;
const res = scor >= 80 ? "Excellent 👍" : scor > 70 ? "Good 😢" : "Sorry 😃";
console.log(res);




                    // Function With chatGpt/////
                    
/*// Function declaration without parameters
function greet() {
    console.log("Hello, world!");
  }
  
  // Function declaration with parameters
  function multiply(a, b) {
    return a * b;
  }
// Calling the greet function
greet();//output Hello, world!
// Calling the multiply function
var result = multiply(5,7);
console.log(result);

//Return statement
function add(a,b){
    return a+b;
}

var sum = add(9,8);
console.log(sum);

// Function Expression

var square = function(x){
    return x * x;
}

console.log(square(5));


/////Type of function/////

// 1.Arrow Functions
// Arrow function without parameters
const sayhello = () => console.log("Hello!");

sayhello(); //output Hello!

// Arrow function with parameters
const power = (base, exponent) => base ** exponent;

console.log(power(5,3));

//2.Anonymous Function

const greeting = function(){
    console.log("Hello world!");
}
greeting();

//3.Immediately Invoked Function Expression (IIFE) 
//==>A function that is executed immediately after it's created.

(function(){
    console.log("I am an IIFE");
})(); //alada kore call korte hoi na

//4.Callback Function //This function is not cleared to me
//==>A function passed as an argument to another function, to be executed later.

function fetchData(callback){
    setTimeout(function(){
        const data= "I love javascript";
        callback(data);
    },2000);
    
}
function handleData(data){
    console.log("Handling Data");
}

fetchData(handleData);

console.log("fetching data....");

//5.Higher-Order Function
//==>A function that takes one or more functions as arguments or returns a function.

function multiplier(factor){
    return function(x){
    return x * factor;
    }
}

const double = multiplier(2);
console.log(double(5));

//6.Generator Function
//==>A function that can be paused and resumed using the yield keyword.

function* countGenerator(){
    let count = 0;
    while(true){
        yield count++;
    }
}

const counter = countGenerator();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);*/