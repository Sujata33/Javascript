///level
/*
//1.
let i = 0;
while (i <= 10) {
    console.log(i + ", ");
    i++;
}

do {
    console.log(i);
    i++;
} while (i <= 10);

//2.

let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

do {
    console.log(i);
    i--;
} while (i >= 0);

//3.
let n = parseInt(prompt("Enter A number"));

for (let i = 0; i <= n; i++) {
    console.log(i);
}

//4.
let sum = "";
for (let i = 0; i <= n; i++) {
    sum = sum + "#";
    console.log(sum);
}

//5.
for (let i = 0; i <= 10; i++) {
    console.log(i + "*" + i + " = " + (i * i));
}
*/
//6.
console.log("i  i^2 i^3");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}   ${i * i * i}`);
}
/*
//7.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//8.
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//9.
let primeNumbers = "";
for (let n = 1; n <= 100; n++) {
    let counter = 0;
    for (let i = n; i >= 1; i--) {
        if (n % i === 0) {
            counter = counter + 1;
        }
    }
    if (counter === 2) {
        primeNumbers = primeNumbers + n + " ";
    }
}
console.log("Prime numbers from 1 to 100 are :");
console.log(primeNumbers);

//10.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

//11.
let sumOdds = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i;
    }
    else {
        sumOdds = sumOdds + i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

//12.
let sumOdds = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i;
    }
    else {
        sumOdds = sumOdds + i;
    }
}
let total = [sumEven, sumOdds];
console.log(total);
*/