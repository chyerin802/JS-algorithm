const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, k] = input[0].split(' ').map(Number)
const coins = input.slice(1).map(Number)

let answer = 0;

for(let i = n - 1; i >= 0; i--){
    answer += parseInt(k / coins[i])
    k %= coins[i]
}

console.log(answer)