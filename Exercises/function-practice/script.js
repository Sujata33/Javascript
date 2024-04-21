//1.
function fullName() {
    console.log("My name is Sujata Ghosh.");
}

fullName();

//2.
function fullNamePar(firstName, lastName) {
    // firstName = "Sujata";
    // lastName = "Ghosh";
    console.log(firstName + " " + lastName);
}
fullNamePar("Sujata", "Ghosh");

//5.
function rectangle(length, width) {
    const perimeter = 2 * (length + width);
    return perimeter;
}

console.log(rectangle(2, 4));

//14.
function checkSeason(month) {

    switch (month) {
        case "january":
            return "Winter";
        case "march":
            return "Spring";
        case "september":
            return "Autumn";

        case "july":
            return "Summer";
        default:
            return "invalid input";

    }
}
// const m = prompt("Enter the month");
// console.log(checkSeason(m));

//15.

function findMax() {
    // console.log(arguments);
    // return a + b + c;
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    // return sum;

    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;

}
console.log(findMax(3, 5, 6));
console.log(findMax(35, 50, 64));
console.log(findMax(93, 59, 68));
console.log(findMax(34, 55, 26));


//level 2
//3.
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// printArray();

//4.
function showDateTime() {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return `${day}/${month}/${year} ${hr}:${min}:${sec}`;
}
console.log(showDateTime());

//6.
function reverseArray(arr) {
    const empArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        empArr[i] = arr[arr.length - 1 - i];
    }
    return empArr;
}
console.log(reverseArray([3, 4, 5]));

//7.
function capitalizeArray(arr) {
    const ampArr = [];
    for (let i = 0; i < arr.length; i++) {
        ampArr[i] = arr[i].toUpperCase();
    }
    return ampArr;
}

console.log(capitalizeArray(["d", "s", "sadsd"]));

//5.
function swapValues() {
    let x = prompt("Enter a number");
    let y = prompt("Enter another number");
    console.log(`x=${x}, y=${y}`);
    let a = x;
    x = y;
    y = a;
    return `x=${x}, y=${y}`;
}

// console.log(swapValues());

//8
function addItem(item) {
    const arr = [5, 6, 8, "asd"];
    arr.push(item);
    return arr;
}
console.log(addItem("sujata"));

//14.

function anyNumArgs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(anyNumArgs(4, 5, 6, 7, 1, 9, 7));

//15.
function randomUserIp(n) {
    const char = "abcdefghijklmnopqrstuvwxyz1234567890";
    let empId = "";
    for (let i = 0; i < n; i++) {

        empId += char[Math.floor(Math.random() * char.length)];
    }
    return empId;
}
console.log(randomUserIp(6));

//17.
function randomHexaNumberGenerator() {
    const char = "1234567890abcde"
    let empHexa = "#";
    for (let i = 0; i < 6; i++) {
        empHexa += char[Math.floor(Math.random() * char.length)];
    }
    return empHexa;
}
console.log(randomHexaNumberGenerator());

//level 2
//2.
function rgbColorGenerator() {
    let firstColor = Math.floor(Math.random() * 256);
    let secColor = Math.floor(Math.random() * 256);
    let thirdColor = Math.floor(Math.random() * 256);
    return `rgb(${firstColor}, ${secColor}, ${thirdColor})`;
}
console.log(rgbColorGenerator());

//3.
function arrayOfHexaColors() {
    let numOfColor = prompt("Enter number of color in array");

    const empArr = [];
    for (let i = 0; i < numOfColor; i++) {
        let char = "abcdef1234567890";
        let empHexa = "#";
        for (let j = 0; j < 6; j++) {
            empHexa += char[Math.floor(Math.random() * char.length)];
        }
        empArr.push(empHexa);
    }
    return empArr;
}
// console.log(arrayOfHexaColors());

function generateColors(color, num) {
    const empArr = [];
    if (color === "hexa") {
        for (let i = 0; i < num; i++) {
            let char = "abcdef1234567890";
            let empHexa = "#";
            for (let j = 0; j < 6; j++) {
                empHexa += char[Math.floor(Math.random() * char.length)];
            }
            empArr.push(empHexa);
        }
        return empArr;
    }
    if (color === "rgb") {
        for (let i = 0; i < num; i++) {
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            rgb = `rgb(${x},${y},${z})`;
            empArr.push(rgb);
        }
        return empArr;
    }
}
console.log(generateColors("hexa", 5));

//8.
function shuffleArray(shuffArray) {
    for (let i = 0; i < shuffArray.length; i++) {
        let index = Math.floor(Math.random() * shuffArray.length);
        [shuffArray[i], shuffArray[index]] = [shuffArray[index], shuffArray[i]];

    }
    return shuffArray;
}
console.log(shuffleArray([2, 4, 5, 6]));

//12.
function sumOfArrayItems(sumArr) {
    let sum = 0;
    // for (let i = 0; i < sumArr.length; i++) {
    //     sum += sumArr[i];
    // }
    for (const item of sumArr) {
        sum += item;
    }
    return sum;
}
console.log(sumOfArrayItems([12, 12, 12]));

//10.
function isEmpty(num) {
    if (num === "" || num === undefined || num === null) {
        return "num is empty";
    }
}
console.log(isEmpty());

//14.
function modifyArray(mArray) {
    if (mArray.length < 5) {
        return `item not found`;
    }
    for (let i = 0; i < mArray.length; i++) {
        if (i === 4) {
            mArray.splice(i, 1, mArray[i].toUpperCase());
        }
    }
    return mArray;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'lemon', 'Carrot']));

// const arr = ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot'];

// const a = arr.slice(1);
// console.log(a);
// console.log(arr);

//16.
function uniqueArray(arr) {
    let a = arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] !== a) {
            a = arr[i];
        } else {
            return `Array items are not unique`;
        }
    }
    return `Array items are unique`;
}
console.log(uniqueArray([1, 2, 3, 4]));

//19.
function randomItemArr() {
    const empArr = [];
    for (let i = 7; i > empArr.length;) {
        const ran = Math.floor(Math.random() * 10);
        if (!empArr.includes(ran)) {
            empArr.push(ran);
        }
    }
    return empArr;
}
console.log(randomItemArr());

//function expression
const fnLove = function () {
    console.log("I Love Mona");
}
fnLove();

const expresFn = function (n) {
    return (n * n) + 10;
}
console.log(expresFn(8));

//arrow function and self invoking (Immedietly invoking function)

const square = (n => {
    return n * n;
})(5);
console.log(square);

