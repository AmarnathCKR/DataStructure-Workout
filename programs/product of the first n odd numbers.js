//recursion simple program
// // Calculates the product of the first n odd numbers
let pro = 1
function product(n){
  if(n===0){
     return n 
   }
  if(n%2!==0){
    pro = n*pro
  }
  return product(n-1)
}
product(5)
console.log(pro)   
