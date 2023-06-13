const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]);
let data = []
for(let i=1; i<=n; i++){
    data.push(Number(input[i]))
}

data.sort((a, b) => a - b);

let answer = '';
data.map((item) => answer += `${item}\n`)
console.log(answer)