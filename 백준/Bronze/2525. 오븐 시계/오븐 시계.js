const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const start = input[0].split(' ')
const startHour = Number(start[0])
const startMinute = Number(start[1])
const ovenTime = Number(input[1])

const end = (hour, minute, time) => {
    let endHour = hour + parseInt(time / 60)
    let endMinute = minute + (time % 60)
    
    if(endMinute >= 60){
        endHour += 1
        endMinute -= 60
    }
    
    if(endHour >= 24){
            endHour -= 24
    }
    
    console.log(endHour+' '+endMinute)
}

end(startHour, startMinute, ovenTime)