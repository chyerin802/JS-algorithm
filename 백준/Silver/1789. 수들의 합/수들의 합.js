const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const s = Number(input[0])
let n = 1;

while(true){
    let sum = n * (n + 1) / 2
    if( s <= sum + n){
        console.log(n)
        break
    }
    n++
}
