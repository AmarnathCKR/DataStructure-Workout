//reverse 
const arr=[1,2,3,4,5]

function reverse(arr){
  for(let i=0,j=arr.length-1;i<j;i++,j--){
      let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
  }
  return arr
}

console.log(reverse(arr))