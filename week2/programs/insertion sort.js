function insertion(arr) {

  for (let i = 1; i < arr.length ; i++) {
    let numToInsert = arr[i]
    let j = i-1
    while(j>= 0 && arr[j]>numToInsert){
        arr[j+1] = arr[j]
        j=j-1
    }
    arr[j+1] = numToInsert
  }
}

const arr = [-1,4,-7,-8,2,3,6,-9,4,1]

insertion(arr)
console.log(arr);
