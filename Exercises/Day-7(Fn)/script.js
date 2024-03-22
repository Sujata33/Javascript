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