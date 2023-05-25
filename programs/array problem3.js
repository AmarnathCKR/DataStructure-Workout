// second smollest

const arr=[1,22,11,4,5]


function secondSmallest(arr){
  let small=arr[0],second=arr[1]
  for(let i=0;i<arr.length;i++){
      if(arr[i]>=0){
        if(arr[i]<small){
          second=small
          small=arr[i]
        }
        if(arr[i]<second && arr[i]>small){
          second=arr[i]
        }
      }
  }
  return second
}

console.log(secondSmallest(arr))
