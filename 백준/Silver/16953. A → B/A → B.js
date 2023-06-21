const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [a, b] = input[0].split(' ').map(Number)
let answer = 1;
let cur = b;

while(cur > a){
    if(cur % 2 === 0){
        cur = cur / 2
    }else if(cur % 10 === 1){
        cur = parseInt(cur / 10)
    }else{
        break
    }
    
    answer++
}

if(cur === a){
    console.log(answer)
}else{
  console.log(-1)
}
