const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let t = Number(input[0]) // 테스트 케이스 개수
let testIndex = 1
let answer = ''

function getAnswer(testCase){
  testCase.sort((a, b) => a[0] - b[0]) // 첫번째 요소에 대해서 오름차순 정렬

  let min = testCase[0][1];
  let cnt = 1; // 붙을 수 있는 면접자 수 count
  for(let i = 1; i < testCase.length; i++){
    if(min > testCase[i][1]) {
      min = testCase[i][1]
      cnt++;
    }
  }
  
  return cnt
}

for(let i = 0; i<t; i++){
  let n = Number(input[testIndex]) // 지원자의 숫자
  let testCase = []
  
  for(let j = 1; j <= n; j++){
     testCase.push(input[testIndex + j].split(' ').map(Number))
  }

  answer += getAnswer(testCase) + '\n'

  testIndex += n + 1
}

console.log(answer)