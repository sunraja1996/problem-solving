function matchingStrings(strings, queries) {
    // Write your code here
    let s = strings.length;
    let q = queries.length;

    let result = []
   

    for(let i = 0; i < q; i++){
        let qCount = 0;
        for(let j = 0; j < s; j++){
            if(queries[i] == strings[j]){
                qCount++
            }
        }
        result.push(qCount)
    }
    return result
}

console.log(matchingStrings(['aba','baba','aba','xzxb'], ['aba','xzxb','ab']))