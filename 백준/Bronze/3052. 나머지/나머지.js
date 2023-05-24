const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let numArr = input.map(Number)
let set = new Set();

for(let i=0; i<10; i++){
    set.add(numArr[i] % 42)
}

console.log(set.size)