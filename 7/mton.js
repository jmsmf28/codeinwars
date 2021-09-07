https://www.codewars.com/kata/588e2a1ad1140d31cb00008c/train/javascript

function generatePairs(m, n) {
  let arr = []
  let arr2 = []
  for(let i=n-m; i>=0; i--){
    arr.push(m)
    arr.push(n-i)
    arr2.push(arr)
    arr = []
  }
  for(let i=1; i<=n-m; i++){
    arr.push(m+i)
    arr.push(n)
    arr2.push(arr)
    arr = []
  }

  return arr2
}

console.group(generatePairs(2, 4))