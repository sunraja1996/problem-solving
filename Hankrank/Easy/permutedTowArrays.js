function twoArrays(k, A, B) {
  // Write your code here
  let a = A.length;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < a; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); // Yes
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])); // No
