function flatten(...arr){
    return arr.toString().split(",").map(Number).map(x => Number.isNaN(x) ? {} : x);
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]))

console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))

