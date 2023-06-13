const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const data = input[0].split(' ')
data.sort((a, b)=> a - b)

let result = ''
data.map((item) => result += item + ' ');

console.log(result)