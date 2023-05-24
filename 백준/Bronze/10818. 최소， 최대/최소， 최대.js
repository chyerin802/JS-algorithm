const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])
const numbers = input[1].split(' ').map(Number);

console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`)
