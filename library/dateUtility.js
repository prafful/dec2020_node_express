var currentDate = ()=>{
    return new Date()
}

var currentDay =()=>{
    return new Date().getDay()
    
}

var currentTime =()=>{
    var cd = new Date()
    return cd.getTime() + "=>" + cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds() + ":" + cd.getMilliseconds()
}



exports.getCurrentDate = currentDate
exports.getCurrentDay = currentDay
exports.getCurrentTime = currentTime