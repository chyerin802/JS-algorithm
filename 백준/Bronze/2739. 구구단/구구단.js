const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString()

const n = Number(input)

for(i=1; i<=9; i++){
    console.log(`${n} * ${i} = ${n*i}`)
}