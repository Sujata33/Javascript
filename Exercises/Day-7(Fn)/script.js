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

const arrayFn = [4, 6, 7, 8, 2, 34, 343];
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray(arrayFn);