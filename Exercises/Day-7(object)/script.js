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


/*
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

//1.
let max = 0;
let maxSkilledUser = "";
for (const item of keysUsers) {
    if (users[item].skills.length > max) {
        max = users[item].skills.length;
        maxSkilledUser = item;
    }
}

console.log(`${maxSkilledUser},${max}`);
//3.
let keysUsers = Object.keys(users);
let mernDeveloper = [];
for (const user of keysUsers) {
    const skillsArray = users[user].skills;
    if (skillsArray.includes("MongoDB") && skillsArray.includes("Express")) {
        mernDeveloper.push(user);
    }
    // for (const skill of skillsArray) {
    //     if (skill === "MongoDB") {
    //         mernDeveloper.push(user);
    //     }
    // }
}
console.log(mernDeveloper);

// const aktaFn = (a, arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === a) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(aktaFn("suju", ["s", 3, 4, "suju"]));


const copyUsers = Object.assign({}, users);//Deep Copy

copyUsers.Sujata = {
    email: "suju@gmail.com",
    skills: ["HTML", "CSS", "DotNetCore", "JS"],
    age: 23,
    isLoggedIn: false,
    points: 100
}
console.log(copyUsers);
console.log(users);

//5.
const keysOfUsers = Object.keys(users);
console.log(keysOfUsers);

//6.
const valuesOfUsers = Object.values(users);
console.log(valuesOfUsers);

//7.
const valuesOfCountries = Object.values(countries);
console.log(valuesOfCountries);

for (const item of valuesOfCountries) {
    // console.log(item);
    let name = item['name'];
    
    console.log(name);
}


const arr = ["a", "b", "c"];

const str = arr.join(", ");
console.log(str);
*/

//level 3//
//1.
const personAccount = {
    firstName: "Sujata",
    lastName: "Ghosh",
    incomes: {
        salary: 30000,
        tuitionFees: 2000
    },
    expenses: {
        roomRent: 4500,
        electricBill: 600,
        marketBill: 1000
    },
    totalIncome: function () {
        let sumIncome = 0;
        for (let item of Object.values(this.incomes)) {
            sumIncome += item;
        }
        return sumIncome;
    },
    totalExpense: function () {

        let sumExpense = 0;
        for (let expense of Object.values(this.expenses)) {
            sumExpense += expense;
        }
        return sumExpense;
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    },
    addIncome: function (type, amount) {
        this.incomes[type] = amount;
    },
    addExpense: function (typeExpense, expenseAmount) {
        this.expenses[typeExpense] = expenseAmount;
    }
};
personAccount.addExpense("Mona", 1000);
console.log(personAccount.expenses);
