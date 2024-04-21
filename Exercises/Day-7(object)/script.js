//level 1//

//1.
/*const dog = {

}

//2.
console.log(dog);

//3.
dog.name = "Popy";
dog.legs = 4;
dog.color = "White";
dog.age = 6;
dog.bark = "woof";
console.log(dog);

//4.
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog['age']);
console.log(dog['bark']);


//5.
dog.breed = "German Shepard";*/

const dog = {};
console.log(dog);

dog.name = "Popy";
dog.legs = 4;
dog.color = "White";
dog.bark = function () { };

console.log(dog);

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


// console.log(users['Alex'].age);

//2.
let countPoint = 0;
let countLogin = 0;
// let keysUser = Object.values(users);
// for (const item of keysUser) {
//     if (item['points'] >= 50) {
//         countPoint++;
//     }
// }

let keysUsers = Object.keys(users);
for (const item of keysUsers) {
    if (users[item].points >= 50) {
        countPoint++;
    }

}
console.log(countPoint);

let valueUsers = Object.values(users);
for (const item of valueUsers) {
    if (item.isLoggedIn) {
        countLogin++;
    }
}
console.log(countLogin);
let max = 0;
let maxSkilledUser = "";
for (const item of keysUsers) {
    if (users[item].skills.length > max) {
        max = users[item].skills.length;
        maxSkilledUser = item;
    }
}

console.log(`${maxSkilledUser},${max}`);