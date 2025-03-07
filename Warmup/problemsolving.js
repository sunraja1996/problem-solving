function birthdayCakeCandles(candles) {
    max = 0;
    count = 0;

    for(let i = 0; i < candles.length; i++){
        if(candles[i] > max){
            max = candles[i];
            count = 1;
        }else if(candles[i] === max){
            count++
        }
    }
    return count;
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));
console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([5, 5, 5, 1, 2, 5]));


function gradingStudents(grades) {
    let roundedGrades = []
    for(let i = 0; i < grades.length; i++){
        let grade = grades[i]
        if(grade < 38){
            roundedGrades.push(grade)
        }else{
            let nextMulBy5 = grade;
            while(nextMulBy5 % 5 !== 0){
                nextMulBy5++
            }
            if(nextMulBy5 - grade < 3){
                roundedGrades.push(nextMulBy5)
            }else{
                roundedGrades.push(grade)
            }
        }
       
    }
    return roundedGrades 
}
let inputGrades = [73, 67, 38, 33];
console.log(gradingStudents(inputGrades)); 