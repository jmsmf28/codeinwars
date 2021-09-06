const numbers = [1, 2, 3, 4, 5];

// 1 -> Reverse
console.log(numbers.reverse());
// [ 5, 4, 3, 2, 1 ]

// 2 -> Join - Creates a new string from the elememts of an array

const countries = ['Portugal', 'Spain', 'France'];

console.log(countries.join('')); //PortugalSpainFrance
console.log(countries.join()); // Portugal,Spain,France
console.log(countries.join('-')); //Portugal-Spain-France

//3 -> Includes -

console.log(countries.includes('Spain'));
// true

// 4 -> Fill - changes all the elemenst in an array with the provided value
//        - changes the array

//console.log(numbers.fill(0));
// [ 0, 0, 0, 0, 0 ]
console.log(numbers.fill(0, 1, 4)); // - change only the array indexes starting a 1 till index 4
// [ 1, 0, 0, 0, 5 ]

function fillNumbers(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
}

console.log(fillNumbers(10)); /// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 5 -> Concat
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 6, 8];

console.log(a.concat(b)); // [ 1, 2, 3, 4, 5, 6 ]

console.log(a.concat(1, 2)); // [ 1, 2, 3, 1, 2 ]

console.log(a.concat(b, c)); // [ 1, 2, 3, 4, 5, 6, 7, 8]

// 6 -> Sort - will convert the elements of the array into strings and then checks the UTF(16) value of each string

const names = ['Florin', 'Liam', 'Jai', 'Ivan'];
const nums = [74, 18, 10, 5, 84, 24, 105];

names.sort();

console.log(names); // [ 'Florin', 'Ivan', 'Jai', 'Liam' ]

nums.sort(compareFunction);

console.log(nums); //[10, 105, 18, 24, 5, 74, 84]; <- withou the function
// [5, 10,  18, 24, 74, 84, 105] <- with the function

function compareFunction(a, b) {
  // 1. < 0 ... a comes first
  // 2. 0 ... nothing happens
  // 3. > 0 ... b comes first
  return a - b;
}

const products = [
  {
    name: 'laptop',
    price: 1000,
  },
  {
    name: 'desktop',
    price: 1500,
  },
  {
    name: 'phone',
    price: 500,
  },
];

// sort depending on the price
ascending = products.sort((a, b) => {
  return a.price - b.price;
});

descending = products.sort((a, b) => b.price - a.price);

console.log(ascending);
/*[
  { name: 'phone', price: 500 },
  { name: 'laptop', price: 1000 },
  { name: 'desktop', price: 1500 }
]*/
console.log(descending);
/* [
  { name: 'desktop', price: 1500 },
  { name: 'laptop', price: 1000 },
  { name: 'phone', price: 500 }
] */

// 7-> Splice - changes an array by removing or replacing existing elements - returns the deleted elements
const newNumbers = [1, 2, 3, 4, 5];

//const deleted = newNumbers.splice(2, 3);
const addingNew = newNumbers.splice(2, 3, 6, 7); // [ 1, 2, 6, 7 ]

console.log(newNumbers); // [ 3, 4, 5 ]
//console.log(addingNew); // [ 3, 4, 5 ]

// 9 -> Slice - returns a copy of a portion of an array
const sliceNumbers = [1, 2, 3, 4, 5];

const numbers2 = sliceNumbers.slice(1, 4); // [ 2, 3, 4 ]
const numbers3 = sliceNumbers.slice(-3);
console.log(numbers2); // [ 2, 3, 4 ]
console.log(numbers3); // [ 3, 4, 5 ]  - last 3 elements from an array

// 10 -> Reduce - executes an callback on an array and returns one single value

const numbers4 = [1, 2, 3, -400, 5, 25, 14, 108];

const total = numbers4.reduce(sum, 0); // the zero is optional.It`s the starting number at wich the accumulator starts

function sum(accumulator, value, index, array) {
  return accumulator + value;
}

console.log(total); // -242

const max = numbers4.reduce(callback, -Infinity); // the zero is optional.It`s the starting number at wich the accumulator starts

function callback(accumulator, value, index, array) {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}

console.log(max);

const store = [
  {
    name: 'laptop',
    price: 1000,
    count: 3,
  },
  {
    name: 'desktop',
    price: 1500,
    count: 4,
  },
  {
    name: 'phone',
    price: 500,
    count: 10,
  },
];

const totalValueStore = store.reduce(
  (acc, item) => acc + item.price * item.count,
  0
);

console.log(totalValueStore); // 14000

// 11 -> Filter - returns a new array
const numbers6 = [1, 2, 3, 4, 5, 6];

const even = numbers6.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(even); // [ 2, 4, 6 ]

const people = [
  {
    name: 'Florin',
    age: 26,
  },
  {
    name: 'Ivan',
    age: 18,
  },
  {
    name: 'Jai',
    age: 15,
  },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults); // [ { name: 'Florin', age: 26 }, { name: 'Ivan', age: 18 } ]

const numbers7 = [1, 2, 3, 2, 1, 3, 4, 5];

const newNums = numbers7.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(newNums); // [ 1, 2, 3, 4, 5 ]

// 12 -> Map - returns a new array
const numbers8 = [1, 2, 3, 4, 5];

const double = numbers8.map((value, index, arr) => value * 2);

console.log(double); // [ 2, 4, 6, 8, 10 ]

const newProducts = [
  {
    name: 'laptop',
    price: 1000,
    count: 5,
  },
  {
    name: 'desktop',
    price: 1500,
    count: 2,
  },
  {
    name: 'phone',
    price: 500,
    count: 10,
  },
];

const totalProductsValue = newProducts.map(
  (value, index, arr) => value.price * value.count
);

console.log(totalProductsValue); // [ 5000, 3000, 5000 ]

// 13 - ForEach
const numbers9 = [1, 2, 3, 4, 5];

numbers9.forEach((item, index, arr) =>
  console.log('a[' + index + '] = ' + item)
);

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count = {};

letters.forEach((letter) => {
  if (count[letter]) {
    count[letter]++;
  } else {
    count[letter] = 1;
  }
});

console.log(count); // { a: 3, b: 2, c: 1, d: 1 }
