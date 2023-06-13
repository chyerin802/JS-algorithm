const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0]);
const data = []
for(let i=1; i<=n; i++){
    if(data.includes(input[i])) continue
    data.push(input[i]);
}

data.sort()
data.sort((a, b) => {
    return a.length - b.length;
})

let result = ''
data.map((word) => result += word + '\n')
console.log(result)