const numbers = {
  one: 1,
  two: 2,
};

const objectArray = Object.entries(numbers);
console.log(objectArray);

objectArray.forEach(([key, value]) => {
  console.log(key); // 'one'
  console.log(value); // 1
});
