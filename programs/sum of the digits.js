//recursion simple program
// Calculates the sum of the digits in a positive integer
let sum = 0
function digitsSum(n){
    // console.log("n:",n,"sum:",sum)
  if(n===0){
     return n 
   }
  sum = n+sum
  return digitsSum(n-1)
}
digitsSum(5)
console.log(sum)   
