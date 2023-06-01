  function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left  =arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
  }
  function merge( left,right){
    const tempArr = []
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            tempArr.push(left.shift())
        }else{
            tempArr.push(right.shift())
        }
    }
     return [...tempArr,...left,...right]
  }
  const arr = [87,45,2,109,85,62,3,0]
  console.log(mergeSort(arr))