const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let output = ''
rl.on('line', (line) => {
    const input = line.split(' ')
    
    if(input.length < 2) return
    
    output += `${Number(input[0]) + Number(input[1])}\n`
}).on('close', () => {
    console.log(output)
    process.exit();
})