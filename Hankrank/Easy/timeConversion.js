function timeConversion(s) {
    // Write your code here
    let period = s.slice(-2);
    let timeParts = s.slice(0,-2).split(":");
    let hours = parseInt(timeParts[0])

    if(period == "AM"){
        if(hours === 12){
            timeParts[0] = "00"
        }else{
            timeParts[0] = String(hours).padStart(2, "0")
        }
    }else{
        if(hours !== 12){
            timeParts[0] = String(hours + 12)
        }
    }
    return timeParts.join(":")
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("12:00:00PM"));
