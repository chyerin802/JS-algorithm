const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])
const meeting = []

for (let i = 1; i <= n; i++) {
  meeting.push(input[i].split(' ').map(Number))
}

// 끝나는 시간을 기준으로 오름차순 정렬
meeting.sort((a, b) => {
  if(a[1] === b[1]) return a[0] - b[0]
  else return a[1] - b[1]
})

let answer = 1
let endTime = meeting[0][1]

// 현재 회의의 끝나는 시간을 기점으로 제일 빨리 끝나는 회의를 선택
for(let i = 1; i < n; i++){
  if(meeting[i][0] >= endTime){
    endTime = meeting[i][1]
    answer++
  }
}

console.log(String(answer))