//recursion simple program
// // Calculates the sum of the first n even numbers
  let sum = 0
function evenSum(n){
   if(n===0){
     return n 
   }
  if(n%2===0){
     sum = n + sum
   }
  return evenSum(n-1)
}
evenSum(6)
   console.log(sum)