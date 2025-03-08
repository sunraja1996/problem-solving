function minMaxSum(arr){
    arr.sort((a,b) => a - b);

    max = arr.slice(0,4).reduce((x,y) => x + y,0);
    min = arr.slice(1,5).reduce((x,y) => x + y,0);

    console.log(max, min);
}

minMaxSum([1, 2, 3, 4, 5])