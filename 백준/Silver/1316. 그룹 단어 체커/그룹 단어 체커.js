const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])
let count = 0;

const checkWord = (word) => {
    const alphabet = new Set();
    let prev = '';
    let cur = '';
    
    for(let c=0; c<word.length; c++){
        prev = cur;
        cur = word[c];
        if(prev === cur){
 
            continue
        }else if(alphabet.has(cur)){
            return false
        }else{
            alphabet.add(cur)
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