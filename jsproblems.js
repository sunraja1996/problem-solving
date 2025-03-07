// PLUSMINUS
function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    let n = arr.length;
    for(let i=0; i < n; i++){
        if(arr[i] > 0){
            positive++
        }else if(arr[i] < 0){
            negative++
        }else{
            zero++
        }
    }
    console.log((positive/n).toFixed(6));
    console.log((negative/n).toFixed(6));
    console.log((zero/n).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1])

//MINIMUM MAXIMUN SUM
function minimaxSum(arr){
    let max = Infinity;
    let min = -Infinity;

    let totalSum = 0;

    for(let n of arr){
        totalSum += n
        if(max > n) max = n;
        if(min < n) min = n;
    }
    min = totalSum - min;
    max = totalSum - max;
    console.log(min, max)
}
minimaxSum([1, 2, 3, 4, 5])

// TIMECONVERSION
