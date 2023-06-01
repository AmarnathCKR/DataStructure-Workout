function bubbleSort(arr){
    let swap
    do{
        swap = false
        for(let i = 0; i < arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                let temp =arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swap = true
            }
        }
    } while(swap)
}

const arr  = [2,58,78,9,4,6,12,31,24,654,8]
console.log(arr)
bubbleSort(arr)
console.log(arr)