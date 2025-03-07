function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            aliceScore += 1
        }else if(a[i] < b[i]){
            bobScore += 1
        }
    }
    return [aliceScore, bobScore]
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));