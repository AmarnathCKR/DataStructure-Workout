// find the two number from the array which sum =10

let arr=[6,5,3,9,8,0,4]

const sum=()=>{
    for(let i=0;i<=arr.length;i++){
        for (let j = i+1; j <= arr.length; j++) {
            if(arr[i]+arr[j]==10){
                
                console.log(arr[i],arr[j])
            }
        }
    }
}
sum()
// space complexity :O(1)
// time complexity  :O(n^2)