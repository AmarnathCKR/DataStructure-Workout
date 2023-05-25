// palindrome
const word='amal'
let length=word.length
let palindrome=true
for(let i=0;i<length/2;i++){
  if(word[i] !== word[length-1-i]){
      palindrome=false
      break
  }
} 
console.log(palindrome)