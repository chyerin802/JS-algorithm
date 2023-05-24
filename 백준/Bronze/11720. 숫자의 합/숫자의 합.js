const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const number = input[1].split('').map(Number)

console.log(number.reduce((a,b)=>a+b))