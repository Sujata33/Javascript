let index = "";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        if (j % 2 === 0) {
            index += "#";
        } else {
            index += "*";
        }
    }
    index += "\n";
}
console.log(index);

let sum = "";
for (let i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
        sum = sum + "#";
    } else {
        sum = sum + "*";
    }
    console.log(sum);
}

console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`);
}

let sums = 0;
for (let i = 0; i <= 100; i++) {
    sums = sums + i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sums}.`);

let sumsev = 0, sumsod = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumsev = sumsev + i
    } else {
        sumsod = sumsod + i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumsev}. And the sum of all odds from 0 to 100 is ${sumsod}.`);
const arr = [sumsev, sumsod];
console.log(arr);