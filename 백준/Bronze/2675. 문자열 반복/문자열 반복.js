const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])


for(let t=1; t<=N; t++){
    const data = input[t].split(' ')
    const R = Number(data[0])
    const string = data[1]
    let result = ''
    
    for(let s=0; s<string.length; s++){
        for(i=0; i<R; i++){
            result += string[s]
        }
    }

    console.log(result)
}

