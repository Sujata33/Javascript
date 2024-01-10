// Variable var, let, const

/*var a = 'Mona, solly ';
var a = "Mona I Love You";
console.log(a);*/



// let a = "I love javascript";

// // let a = "Love"; error
// a = "sss";
// console.log(a);

// const a = "Javascript";

// a = "jhjhjh";//I dont change the value
// console.log(a);

// ////// Data Type //////
// String, Symbol, Boolean, BigInt, Null, Number, Undefine => Primitive
// Object, Array =>Non-Primitive //array er typeof korle object hisabe dekhai
// const str="String";
// const Number=20;
// const bool=true;
// const falseValue=null;
// const arr=["1", "2"];
// const obj={firstname: "Sujata"};

// //Typeof Operator
// console.log(typeof arr);

// console.log(2 ** 3); //2 to the power 3


//// Comparison Operator ////

/*//1. Equality Operator (==) Return a boolean
console.log(3==3);
console.log(true==true);
console.log("2"==2);//typeof er jonno etao true return korbe 
console.log("Hello World"=="Hello World");
// 2. Inequality Operator (!=)
console.log(3!=5);

//3. Identity Operator (===), Strictly Equality Operator (ekane typeof khate na)
console.log(3===2); //false return korbe
console.log(2===2); //true

//4. Non-Identity Operator(!==), Strictly Inequality Operator

console.log(3!==2); //true
console.log(3!=='3'); //true

///// Logical Operator
//AND(&&), OR(||)
*/
                        //**DAY TWO**//
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