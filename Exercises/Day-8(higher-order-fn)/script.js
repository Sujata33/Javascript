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