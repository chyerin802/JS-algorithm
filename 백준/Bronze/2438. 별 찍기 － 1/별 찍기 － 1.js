const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString()

const n = Number(input)
let stars = ''

for(let i=1; i<=n; i++){
    stars += '*'
    console.log(stars)
}