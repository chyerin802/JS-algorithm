const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])

for(let t=1; t<=N; t++){
    const [R, string] = input[t].split(' ')
    let result = ''
    
    for(let s=0; s<string.length; s++){
        result += string[s].repeat(R)
    }

    console.log(result)
}

