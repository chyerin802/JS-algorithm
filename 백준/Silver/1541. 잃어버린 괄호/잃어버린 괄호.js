const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const minus = input[0].split('-').map((item) => {
  let plus = item.split('+').map(Number)
  return plus.reduce((a, b) => a+b)
})

console.log(minus.reduce((a,b) => a-b))