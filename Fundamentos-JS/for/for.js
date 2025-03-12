let n = 1
let x = 0 
let i
while (n < 10){
    if (n % 2 != 0){
        for (let i = 3;i * i <= n ; i+=2){
            if (n % i == 0){
                break
            }
        }
        if (i < n){
            x++
        }   
    }
    n++
}
console.log(x)