const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0]);
const data = input[1].split(' ').map(Number)

const uniqueData = [...new Set(data)];
uniqueData.sort((a, b) => a - b);

let map = new Map();
uniqueData.map((num, index) => map.set(num, index))

let result = ''
data.map((x) => result += map.get(x) + ' ')

console.log(result)