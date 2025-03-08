function plusMinus(arr){
    let postitive = 0;
    let negative = 0;
    let zero = 0;
    let n = arr.length;

    for(let i = 0; i <= n; i++){
        if(arr[i] > 0){
            postitive++
        }else if(arr[i] < 0){
            negative++
        }else if(arr[i] == 0){
            zero++
        } 
    }
    
    let postitiveCount = (postitive / n).toFixed(6)
    let negativeCount = (negative / n).toFixed(6)
    let zeroCount = (zero / n).toFixed(6)
       
    console.log(postitiveCount);
    console.log(negativeCount);
    console.log(zeroCount);
    
}
plusMinus([-4, 3, -9, 0, 4, 1])
plusMinus([1, 1, 0, -1, -1])
plusMinus([1, 2, 0, -1, -2])
plusMinus([1, 2, 0, 0, 1,-3,6])