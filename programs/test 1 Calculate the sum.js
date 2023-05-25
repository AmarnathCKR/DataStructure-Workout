// calculate the sum of all number from 1 to n 
// method1
function addupto(n){
    let total =0
    for (let i=1; i<=n; i++){
        total += i
    }
    return total;
    
}

console.log(addupto(100))

// method2

function addupto(n){
    return total = n*(n+1)/2
}

console.log(addupto(100))


// how to find which code is more faster 

// method1

function addupto(n){
    let total =0
    for (let i=1; i<=n; i++){
        total += i
    }
    return total;
    
}
var t1=performance.now()
addupto(1000000000)
var t2=performance.now()
console.log(`time taken: ${(t2-t1)/1000}`)

// method2

function addupto(n){
    return total = n*(n+1)/2
}

var t1=performance.now()
addupto(1000000000)
var t2=performance.now()
console.log(`time taken: ${(t2-t1)/1000}`)


// by using this we find that second method is more effective  
// but the find method is not so good this method make more time 
// in big programs in this case we can use another method that is 
// to count the number of operation in a program if the any operation 
// we need to count the operation will increace that much time where the loop work  