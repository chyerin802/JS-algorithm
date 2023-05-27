const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

const words = input.trim().split(' ')

if(words[0] === '') console.log(0)
else console.log(words.length)

