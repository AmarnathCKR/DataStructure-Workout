//recursion simple program
// find the even numbers
 function even(n){
   if(n===0){
     return n 
   }
   if(n%2===0){
   console.log(n)
   }
return even(n-1)
 }
even(5)