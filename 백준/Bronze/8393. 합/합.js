const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

const N = Number(input)
let sum = 0;

for(let i=1; i<=N; i++){
    sum += i 
}

console.log(sum)