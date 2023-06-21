const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = input[0];
let answer = -1;

for(let i = parseInt(n/5); i >= 0; i--){
    let sugar = n - 5*i
    if(sugar % 3 === 0){
        answer = i + sugar/3
        break
    }
}

console.log(answer)
