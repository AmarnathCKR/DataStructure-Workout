//recursion simple program
//Print the numbers upto n
function counter(n){
  if(n===0){
    return -1
  }  
  console.log(n)
return counter(n-1)
}
counter(5)