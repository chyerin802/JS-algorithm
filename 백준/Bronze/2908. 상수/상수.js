const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const data = input[0].split(' ')

let num1 = Number(data[0].split('').reverse().join(''))
let num2 = Number(data[1].split('').reverse().join(''))

if(num1 > num2){
    console.log(num1)
}else{
    console.log(num2)
}
