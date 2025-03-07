function breakingRecords(scores) {
        let max = scores[0];
        let min = scores[0];
        let maxCount = 0;
        let minCount = 0
        for(let i = 0; i < scores.length; i++){
            if(scores[i] > max){
                max = scores[i]
                maxCount++
            }else if(scores[i] < min){
                min = scores[i]
                minCount++
            }
        }
        console.log([maxCount, minCount]);        
        return [maxCount, minCount];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])

