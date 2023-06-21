const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [a, b] = input[0].split(' ').map(Number)
let answer = 1;
let cur = b;

while(cur > a){
    let curStr = String(cur)
    
    if(cur % 2 === 0){
        cur = cur / 2
    }else if(curStr[curStr.length - 1] === '1'){
        cur = Number(curStr.slice(0, curStr.length - 1))
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
