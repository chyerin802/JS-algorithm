const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0]);
let judgeArr = []
for(let i=1; i<=n; i++){
    let [age, name] = input[i].split(' ');
    judgeArr.push({ age: Number(age), name })
}

judgeArr.sort((a, b) => {
    if(a.age !== b.age) return a.age - b.age
    else return 0
})

let result = ''
judgeArr.map((judge) => result += `${judge.age} ${judge.name}\n`)
console.log(result)