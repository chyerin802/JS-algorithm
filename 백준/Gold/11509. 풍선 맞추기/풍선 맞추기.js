const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0]) // 풍선의 개수
// 풍선의 높이를 저장
let balloons = input[1].split(' ').map(Number)

// 각 높이에 있는 화살의 개수
// arrows[i]에는 높이 i에 있는 화살 개수가 나타남
let arrows = new Array(Math.max(...balloons) + 1).fill(0)

// 화살의 개수
let answer = 0

for(let x of balloons){
  if(arrows[x] > 0){
    arrows[x - 1]++;
    arrows[x]--;
  }else{
    arrows[x - 1]++;
    answer++
  }
}

console.log(answer)