const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])
const time = input[1].split(' ').map(Number).sort((a, b) => a - b) // 시간 오름차순 정렬

let answer = 0 // 최종 답
let wait = 0 // 각 사람이 기다리는 시간

for(let i=0; i<n; i++){
    // 현재 사람이 사용하는 시간 time[i]
    wait += time[i]; // 현재 사람이 총 기다린 시간 (이전 사람들이 기다렸던 시간의 합 + 자신의 사용 시간)
    answer += wait // 기다린 시간의 총 합
}

console.log(answer)
