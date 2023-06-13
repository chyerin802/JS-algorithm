const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, k] = input[0].split(' ').map(Number);
let data = input[1].split(' ').map(Number);

data.sort((a, b) => a - b);

console.log(data[k - 1])
