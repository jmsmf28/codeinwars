https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  const arr = numbers.split(' ')
  const max = arr.reduce((a, b) => {
    return Math.max(a, b);
  });
  const min = arr.reduce((a, b) => {
    return Math.min(a, b);
  });
  return max + ' ' + min;
}

function highAndLow_v(numbers) {
  numbers = numbers.split(' ').map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}

console.log(highAndLow('1 9 3 4 -5'));
