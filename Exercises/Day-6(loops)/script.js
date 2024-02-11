///level
/*let i = 0;
while (i <= 10) {
    console.log(i + ", ");
    i++;
}

do {
    console.log(i);
    i++;
} while (i <= 10);
*/

/*
let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

do {
    console.log(i);
    i--;
} while (i >= 0);

let n = parseInt(prompt("Enter A number"));

for (let i = 0; i <= n; i++) {
    console.log(i);
}
let sum = "";
for (let i = 0; i <= n; i++) {
    sum = sum + "#";
    console.log(sum);
}


for (let i = 0; i <= 10; i++) {
    console.log(i + "*" + i + " = " + (i * i));
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
*/

let flag = false;
for (let j = 0; j <= 10; j++) {
    for (let i = 2; i <= j / 2; i++) {
        if (j % i === 0) {
            flag = true;
        }
    }
    if (flag !== true) {
        console.log(j);
    }
}
