// PLUS MINUS

function plusMinus(arr){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            positive++
        }else if(arr[i] < 0){
            negative++
        }else{
            zero++
        }
    }
    console.log((positive/n).toFixed(n));
    console.log((negative/n).toFixed(n));
    console.log((zero/n).toFixed(n));
}

plusMinus([-4, 3, -9, 0, 4, 1])


// MINMAXSUM
function minimaxsum(arr) {
    arr.sort((a,b) => a - b);

    let minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
    let maxSum = arr.slice(1, 5).reduce((sum, num) => sum + num, 0);

    console.log(minSum, maxSum)
}
minimaxsum([1,2,3,4,5])

// another method
function minmaxSum(arr){
    let totalSum = 0;
    let maxElement = Infinity;
    let minElement = -Infinity;

    for(let num of arr){
        totalSum += num;
        if(num < maxElement) maxElement = num;
        if(num > minElement) minElement = num;
    }

    minSum = totalSum - minElement;
    maxSum = totalSum - maxElement;
    console.log(minSum, maxSum);
}
minmaxSum([1,3,5,2,4])

//TIMECONVERSION
function timeConversion(s){
    let period = s.slice(-2);
    let timeParts = s.slice(0 , -2).split(":");
    let hours = parseInt(timeParts[0]);

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

