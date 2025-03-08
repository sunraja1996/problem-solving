function string_xor(s1, s2){
    let result = "";
    
    for(let i = 0; i < s1.length; i++){
        result += (s1[i] === s2[i]) ? "0" : "1"
    }
    return result
}

console.log(string_xor("10101", "00101"))