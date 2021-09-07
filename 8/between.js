// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

function between(a, b) {
  let arr = [a, b];
  let diff = Math.abs(b - a);
  console.log(diff);
  for (let i = 0; i < diff - 1; i++) {
    a++;
    console.log(a);
    arr.push(a);
  }
  return arr.sort((a, b) => a - b);
}

console.log(between(1, 4));

function between_v(a, b) {
  // your code here
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(between_v(1, 4));
