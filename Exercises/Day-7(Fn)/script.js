// 1.
//function fullName() {
//     console.log("Sujata Ghosh");
// }

// fullName();

//2.
function fullName(firstName, lastName) {
    return firstName + lastName;
}

console.log(fullName("Sujata", "Ghosh"));

//3.
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(20, 43));

//4.
function areaOfRectangle(length, width) {
    const area = length * width;
    return area;
}

console.log(areaOfRectangle(5, 9));

//5.
function perimeterOfRectangle(length, width) {
    const perimeter = 2 * (length + width);
    return perimeter;
}

console.log(perimeterOfRectangle(9, 5));

//6.
function volumeOfRectPrism(length, width, height) {
    const volume = length * width * height;
    return volume;
}

console.log(volumeOfRectPrism(5, 8, 6));

//7.
function areaOfCircle(r) {
    const circleArea = 3.14 * r * r;
    return circleArea.toFixed(2);
}
console.log(areaOfCircle(6));

//8.
function circumOfCircle(r) {
    const circumference = 2 * 3.14 * r;
    return circumference;
}

console.log(circumOfCircle(4));

//9.
function substance(mass, volume) {
    const density = mass / volume;
    return density;
}

console.log(substance(12, 4));

//10.
function speedCal(distance, time) {
    const speed = distance / time;
    return speed;
}
console.log(speedCal(14, 2));
//11.
function weightFn(mass, gravity) {
    const weight = mass * gravity;
    return weight;
}
console.log(weightFn(5, 6));

//12.
function convertCelsiusToFahrenheit(oC) {
    const oF = (oC * 9 / 5) + 32;
    return oF;
}
console.log(convertCelsiusToFahrenheit(45));

//13.
function bodyMassIndex(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        console.log("The person is Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("The person is Normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log("The person is Overweight");
    } else if (bmi < 30) {
        console.log("The person is Obese");
    }
}

bodyMassIndex(24, 12);

//14.
function checkSeason(month) {
    if (month === "December" || month === "January" || month === "February") {
        return "Winter";
    } else if (month === "March" || month === "April" || month === "May") {
        return "Spring";
    } else if (month === "june" || month === "july" || month === "August") {
        return "Summer";
    }
}

console.log(checkSeason("January"));

//15.
function findMax() {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(3, 5, 2));

//// Level 2 /////

//3.
const arrayFn = [4, 6, 7, 8, 2, 34, 343];
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray(arrayFn);

//4.
function showDateTime() {
    let toDay = new Date();
    const day = toDay.getDate();
    const month = toDay.getMonth();
    const year = toDay.getFullYear();
    const hr = toDay.getHours();
    const min = toDay.getMinutes();
    const sec = toDay.getSeconds();

    function add0(z) {
        if (z < 10) {
            return `0${z}`;
        }
        return z;
    }


    console.log(`${add0(day)}/${add0(month)}/${year} ${add0(hr)}:${add0(min)}`);
}

showDateTime();

//5.
function swapValues(x, y) {
    console.log(`x=${x}, y=${y}`);
    x = x - y;
    y = x + y;
    x = y - x;
    console.log(`x=${x}, y=${y}`);

    // let z;
    // z=x;
    // x=y;
    // y=z;
}

swapValues(6, 9);

//6.
function reverseArray(arr1) {
    const empArray = [];
    for (let i = arr1.length; i > 0; i--) {
        empArray[i - 1] = arr1[arr1.length - i];
    }
    return empArray;
}

console.log(reverseArray([3, 2, 7, 78, 4]));

//7.
function capitalizeArray(arrCapital) {
    const empArrCap = [];
    for (let i = 0; i < arrCapital.length; i++) {
        empArrCap[i] = arrCapital[i].toUpperCase();
    }
    return empArrCap;
}

console.log(capitalizeArray(["abc", "heygdh", "ami", "tumi"]));

//8.
function addItem(abc) {
    const arrAddItem = [4, 8, "hgf", 67, "yt"];
    arrAddItem.push(abc);
    return arrAddItem;
}
console.log(addItem("sujata"));

//9.
function removeItem(index) {
    const arrRemoveItem = [6, 8, 9, "sujata", "ghosh", 9, 24000];
    arrRemoveItem.splice(index, 1);
    return arrRemoveItem;
}
console.log(removeItem(4, 1));

//10.
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfNumbers(30));

//11.
function sumOfOdds(n) {
    let sumOdd = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sumOdd = sumOdd + i;
        }
    }
    return sumOdd;
}
console.log(sumOfOdds(30));

//12.
function sumOfEven(n) {
    let sumEven = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sumEven = sumEven + i;
        }
    }
    return sumEven;
}
console.log(sumOfEven(9));

//prime
function primeCheck(n) {
    let flag = false;
    if (n === 1) {
        return "The number is not prime";
    } else {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                flag = true;
                break;
            }
        }
        if (flag !== true) {
            return "the number is prime";
        } else {
            return "the number is not a prime number";
        }
    }
}
console.log(primeCheck(1));

//17.
function randomHexaNumberGenerator() {
    const indexString = "abcdefghijklmnopqrstuvwxyz0123456789";
    let hexaNumber = "#";
    for (let i = 0; i < 6; i++) {
        hexaNumber = hexaNumber + indexString[Math.floor(Math.random() * indexString.length)];
    }
    return hexaNumber;
}
const hexaNumber = randomHexaNumberGenerator();
console.log(hexaNumber);

//18.
function userIdGenerator() {
    const indexString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%_&0123456789";
    let userID = "";
    for (let i = 0; i < 7; i++) {
        userID += indexString[Math.floor(Math.random() * indexString.length)];
    }
    return userID;
}
const id = userIdGenerator();
console.log(id);