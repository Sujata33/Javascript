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
//7.
for (const country of countries) {
    const langArr = country.languages;
    if (langArr.length === 1) {
        console.log(`name: ${country.name}, capital: ${country.capital}, population:${country.population}, languages:${langArr.slice(0)}`);
    } else {
        console.log(`name: ${country.name}, capital: ${country.capital}, population:${country.population}, languages:${langArr.slice(0, langArr.length - 1)} and ${langArr.slice(langArr.length - 1)}`);
    }

}
const langArr = ["a", "c", "d"];
const fst = langArr.slice(0, 2);
console.log(fst);

//1.
const personAccount = {
    firstName: "Sujata",
    lastName: "Ghosh",
    incomes: {
        salary: 30000,
        tuitionFees: 2300
    },
    expenses: {
        roomRent: 4500,
        electricBill: 600,
        marketBill: 4000,
        transportationBill: 1000
    },
    totalIncome: function () {
        let sumIncome = 0;
        for (const income of Object.values(this.incomes)) {
            sumIncome += income;
        }
        return sumIncome;
    },
    totalExpense: function () {
        let sumExpe = 0;
        for (const exp of Object.values(this.expenses)) {
            sumExpe += exp;
        }
        return sumExpe;
    },
    addIncome: function (type, amount) {
        this.incomes[type] = amount;
    },
    addExpense: function (type, amount) {
        this.expenses[type] = amount;
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
}

console.log(personAccount.accountBalance());
personAccount.addIncome("mona", 20000);
console.log(personAccount);

*/
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

//2.
//a.
function signUp(newUser, newEmail, password) {

    const idString = "abcdefghijklmnopqrstuvwxyz1234567890";
    let ranId = "";
    for (let i = 0; i < 6; i++) {
        let ranNum = Math.floor(Math.random() * idString.length);
        ranId += idString[ranNum];
    }

    const date = new Date();
    let day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() < 9 ? `0${date.getMonth()}` : date.getMonth();
    let year = date.getFullYear();
    let hr = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    let min = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    // let sec = date.getSeconds()< 9 ? `0${date.getSeconds()}` : date.getSeconds();
    let amPm = "AM";
    if (hr > 12 && hr <= 23) {
        amPm = "PM";
    }
    let createdAt = `${day}/${month}/${year} ${hr}:${min} ${amPm}`;

    for (const user of users) {

        if (user.username === newUser) {
            return "you have already an account";
        }

    }
    const addUser = {
        _id: ranId,
        username: newUser,
        email: newEmail,
        password,
        createdAt,
        isLoggedIn: false

    }
    users.push(addUser)

}
signUp("sujata", "suju@dd.com", "11111");
// console.log(signUp());

console.log(users);

//b.
function signIn(userName, passWord) {
    for (const user of users) {
        if (user.username === userName && user.password === passWord) {
            user.isLoggedIn = true;
            return "You are successfully logged in";
        }

    }
    return "Invalid User Name or Password please try again";
}

console.log(signIn("sujata", "11111"));
// signIn("sujata", "11111");
console.log(users);
//3.
function rateProduct(proIndex, rating) {
    const rateIndex = "abcdefghijklmnopqrstuvwxyz1234567890";
    let userId = "";
    for (let i = 0; i < 6; i++) {
        const ranId = Math.floor(Math.random() * rateIndex.length);
        userId += rateIndex[ranId];
    }

    products[proIndex].ratings.push({
        userId,
        rate: rating
    });


    console.log(userId);
}
rateProduct(1, 5.6);
console.log(products);

function averageRating(proIndex) {
    let sumRate = 0, avgRate = 0;

    for (const rateObj of products[proIndex].ratings) {
        sumRate += rateObj.rate;
    }
    avgRate = sumRate / products[proIndex].ratings.length;
    return `Avarage of ratings is ${avgRate}`;
}
console.log(averageRating(0));