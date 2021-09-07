https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

function removeDuplicateWords (s) {
  const words = s.split(' ')

  let unique = [...new Set(words)];
  return unique.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))