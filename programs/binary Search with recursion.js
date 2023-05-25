// Binary Search with recursion
function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
  }
  function search(arr,target,left,right){
    if(left>right){
      return -1
    }
    let mid = Math.floor((left+right)/2)
    if(target === arr[mid] ){
      return mid
    }
    if(target < arr[mid]){
      return search(arr,target, left, mid - 1)
    }else{
       return search(arr,target, mid+1, right)
    }
  }
          console.log('position of the number: '+recursiveBinarySearch([1,2,3,4],4))
          console.log('position of the number: '+recursiveBinarySearch([1,2,3,4,5,6,8],1))
          console.log('position of the number: '+recursiveBinarySearch([1,2,3,4,5,6,8],10))
          console.log('position of the number: '+recursiveBinarySearch([1,2,3,4,5,6,8],8))