function dayOfProgrammer(year) {
    // Write your code here
    let dayswithLeapyear =  244;
    let dayswithoutLeapyear = 243;
    let on1918 = 230
    let programmerDay = 256;

    let month = "09"
    let day;

    if(year === 1918){
        day = programmerDay - on1918;
    }else if((year < 1918 && year % 4 === 0) || ((year % 400 === 0) || (year % 4 ===0 && year % 100 !== 0))){
        day = programmerDay - dayswithLeapyear
    }else{
        day = programmerDay - dayswithoutLeapyear
    }

    return `${day}.${month}.${year}`
    
}

console.log(dayOfProgrammer(2017));  // Output: "13.09.2017" (Non-leap year)
console.log(dayOfProgrammer(2016));  // Output: "12.09.2016" (Leap year)
console.log(dayOfProgrammer(1800));  // Output: "12.09.1800" (Julian leap year)
console.log(dayOfProgrammer(1918));  // Output: "26.09.1918" (Special transition year)
console.log(dayOfProgrammer(2000));  // Output: "12.09.2000" (Leap year)