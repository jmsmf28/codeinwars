//https://www.codewars.com/kata/57741d8f10a0a66915000001/train/javascript

const intDiff = (arr, n) => {
  // your code goes here
  let count = 0;
  let res = arr.map((item) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] - item === n) {
        count++;
      }
    }
    return count;
  });
  const max = res.reduce((a, b) => {
    return Math.max(a, b);
  });
  return max;
};

//console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 0));

const intDiff_v = (arr, n) => {
  // your code goes here
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[j] === n) {
        count++;
      }
    }
    return count;
  }
  const max = res.reduce((a, b) => {
    return Math.max(a, b);
  });
  return max;
};

console.log(intDiff_v([1, 1, 5, 6, 9, 16, 27], 1));
