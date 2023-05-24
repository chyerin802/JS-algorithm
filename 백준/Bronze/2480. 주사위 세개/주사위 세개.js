const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString()

const [first,second,third] = input.split(' ').map(Number)
let result = 0;

if(first === second && second === third){
    result = 10000 + first * 1000
}else if(first === second){
    result = 1000 + first * 100
}else if(second === third){
    result = 1000 + second * 100
}else if(first === third){
    result = 1000 + first * 100
}else{
    result = Math.max(first,second,third) * 100
}

console.log(result)