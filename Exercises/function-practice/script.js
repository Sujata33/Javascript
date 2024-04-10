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