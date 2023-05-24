const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [startHour, startMinute] = input[0].split(' ').map(Number);
const ovenTime = Number(input[1])

const end = (hour, minute, time) => {
    let totalMinute = hour * 60 + minute + time
    totalMinute %= 1440 // '일 단위는 제외'
    
    let endHour = parseInt(totalMinute / 60)
    let endMinute = totalMinute % 60
    
    
    console.log(endHour+' '+endMinute)
}

end(startHour, startMinute, ovenTime)
