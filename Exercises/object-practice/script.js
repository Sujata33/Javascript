//1.
/*const dog = {};
//2.
console.log(dog);
//3.
dog.name = "popy";
dog.legs = 4;
dog.color = "red";
dog.age = 10;
dog.bark = function () {
    return "woof woof";
};
console.log(dog);
console.log(dog.bark());

//5.
dog.breed = function () {
    return "nery kutta";
};
dog.getDogInfo = function () {
    return "name is popy";
};


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
//1.
const keySkillsUser = Object.keys(users);
let maxSkills = 0;
let maxUsers;
for (const key of keySkillsUser) {
    if (users[key].skills.length > maxSkills) {
        maxSkills = users[key].skills.length;
        maxUsers = key;
    }
}
console.log(maxUsers);
//2.
const valuesUser = Object.values(users);
console.log(valuesUser);
let c = 0;
for (const value of valuesUser) {
    if (value.isLoggedIn) {
        c++;
    }
}
console.log(`logged in users= ${c}`);

for (const value of valuesUser) {
    if (value['points'] >= 50) {
        c++;
    }
}
console.log(`points >=50 users= ${c}`);

//3.
const keyUser = Object.keys(users);
const mernDev = [];
for (const key of keyUser) {
    const skillArr = users[key].skills;
    if (skillArr.includes("MongoDB") && skillArr.includes("Express") && skillArr.includes("React") && skillArr.includes("Node")) {
        mernDev.push(key);
    }
}
console.log(mernDev);

//4.
const copyUsers = Object.assign({}, users);
copyUsers.sujata = {
    email: 'sujata.mandardihi@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'DotNet Core', 'Angular'],
    age: 23,
    isLoggedIn: false,
    points: 90
};
console.log(copyUsers);
console.log(users);
*/
//7.
for (const country of countries) {
    console.log(`name: ${country.name}, capital: ${country.capital}, population:${country.population}`);
}
const langArr = ["a", "c", "d"];
const fst = langArr.slice(0, 2);
console.log(fst);
