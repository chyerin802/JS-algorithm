const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const testCaseNum = Number(input[0])
let result = ''

for(let i=1; i <= testCaseNum; i++){
    let testCase = input[i].split(' ').map(Number)
    let N = testCase[0]
    let score = testCase.slice(1)
    
    let avg = score.reduce((a, b) => a+b) / N
    
    let count = 0;
    for(let j=0; j<N; j++){
        if(score[j] > avg) count++
    }
    
    result += `${((count / N) * 100).toFixed(3)}%\n`    
}

console.log(result)