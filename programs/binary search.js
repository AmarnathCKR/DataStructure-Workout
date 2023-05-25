// Binary Search
//Find the target value from the array

function search(arr,target){
    let left = 0
    let right = arr.length-1
  
      while(left <= right){
  let mid = Math.floor((left+right)/2) 
        if(target === arr[mid]){
          return mid
        }
        if(target < arr[mid] ){
          right = mid-1
        }else{
          left = mid+1
        }
      }
    return -1
  }
          console.log('position of the number: '+search([1,2,3,4,5,6,8],4))
          console.log('position of the number: '+search([1,2,3,4,5,6,8],1))
          console.log('position of the number: '+search([1,2,3,4,5,6,8],10))
          console.log('position of the number: '+search([1,2,3,4,5,6,8],8))
  
  