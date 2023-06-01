 function quicksort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot  = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left) , pivot , ...quicksort(right)]
 }


  
 const arr = [1,47,892,35,44,8,7,645,1,6]
 console.log( quicksort(arr))