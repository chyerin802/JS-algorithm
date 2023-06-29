const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])
const paths = input[1].split(' ').map(Number).reverse() // n-1개
const oils = input[2].split(' ').map(Number)  // n개
let money = 0;
let cur = 0; // 현재 위치

// 풀이: 현재 주유소보다 더 싼 주유소가 나올 거리만큼 미리 충전한다.

for(let i=1; i<n; i++){
  money += paths[i - 1] * oils[cur]
  if(oils[i] < oils[cur]){
    cur = i;
  }   
}

console.log(money)