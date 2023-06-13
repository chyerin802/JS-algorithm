let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0]);

const data = [];
for(let i=1; i<=n; i++){
    let [x, y] = input[i].split(' ').map(Number);
    data.push({x, y})
}

data.sort((a, b) => {
    // x가 서로 다르다면 x를 기준으로 오름차순 / 같다면 y를 기준으로 오름차순
    if(a.x !== b.x) return a.x - b.x
    else return a.y - b.y
})

let result = '';
data.map((point) => result += `${point.x} ${point.y}\n`);
console.log(result)
