const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])
let count = 0;

const checkWord = (word) => {
    const alphabet = new Set(word[0]);
    
    for(let c=0; c<word.length-1; c++){
        // 이전 알파벳과 현재 알파벳이 다르다면
        if(word[c] !== word[c+1]){
            if(alphabet.has(word[c+1])){
                return false
            }
            
            alphabet.add(word[c+1])
        }
    }
    
    return true;
    
}

for(let i=1; i<=N; i++){
    if(checkWord(input[i])){
        count++
    }
}

console.log(count)
