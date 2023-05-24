const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

const hour = Number(input[0])
const minute = Number(input[1])

const wake = (h,m) => {
    let wakeHour = h;
    let wakeMinute = m - 45;
    
    if(wakeMinute < 0){
        wakeHour -= 1;
        wakeMinute += 60;
        
        if(wakeHour < 0){
            wakeHour += 24
        }
    }
    
    console.log(wakeHour + ' ' + wakeMinute)
}

wake(hour, minute)