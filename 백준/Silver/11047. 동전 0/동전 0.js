const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, k] = input[0].split(' ').map(Number)
const coins = input.slice(1).map(Number)

let answer = 0;

while(k > 0){
    let count = parseInt(k / coins[n - 1]);
    
    k -= count * coins[n - 1];
    answer += count;
    n--;
}

console.log(answer)

console.log(count);
