const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

//3.
function countriesPrint(country) {
    console.log(country);
}
countries.forEach(countriesPrint);

//4.
names.forEach(function (name) {
    console.log(name);
});

//5.
// numbers.forEach(function (number) {
//     console.log(number);
// })
numbers.forEach(number => console.log(number));

//6.
const capCountries = countries.map(country => country.toUpperCase());
console.log(capCountries);

//7.
const lengthCountries = countries.map(country => country.length);
console.log(lengthCountries);

//8.
const sqNumbers = numbers.map(num => num * num);
console.log(sqNumbers);

//9.
const capName = names.map(name => name.toUpperCase());
console.log(capName);

//10.
const priceProduct = products.map(p => p.price);
console.log(priceProduct);

//11.
const landCountries = countries.filter(country => country.includes("land"));
console.log(landCountries);

//12.
const sixlenCountries = countries.filter(country => country.length === 6);
console.log(sixlenCountries);

//13.
const sixandMoreLenCountries = countries.filter(country => country.length >= 6);
console.log(sixandMoreLenCountries);

//14.
const startwithCountries = countries.filter(country => country.startsWith('E'));
console.log(startwithCountries);

//15.
const pricesofProducts = products.filter(prod => prod.price.valueOf);
console.log(pricesofProducts);

//16.
const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumNumbers);

//17.
const concatCountries = countries.reduce((acc, curr) => `${acc + curr}, `, "Estonia, ");
console.log(`${concatCountries} are north European countries.`);

//23.
const findCountries = countries.find(country => country.length == 6);
console.log(findCountries);

//24.
const findIndexCountries = countries.findIndex(country => country.length == 6);
console.log(findIndexCountries);

//25.
const posCountries = countries.findIndex(country => country.includes("Norway"));
console.log(posCountries);

//26.
const positionCountries = countries.findIndex(country => country.includes("Russia"));
console.log(positionCountries);

//level-2
//2.
const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalPrice);