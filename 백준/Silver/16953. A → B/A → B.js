const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [a, b] = input[0].split(' ').map(Number)
let answer = 1;

while(b > a){
    if(b % 2 === 0){
        b = b / 2
    }else if(b % 10 === 1){
        b = parseInt(b / 10)
    }else{
        break
    }
    
    answer++
}

if(b === a){
    console.log(answer)
}else{
  console.log(-1)
}
