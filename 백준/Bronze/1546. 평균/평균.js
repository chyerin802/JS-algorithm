const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = input[0]
const score = input[1].split(' ').map(Number)

const max = Math.max(...score)
const newScore = score.map((s) => s / max * 100)

console.log(newScore.reduce((a,b)=>a+b) / N)
