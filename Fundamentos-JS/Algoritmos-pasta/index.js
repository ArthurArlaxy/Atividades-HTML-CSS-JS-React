const numeros = [2,4,9,7,10,2,2]

function soma(num=[]){
    let total = 0
    if (num.length === 0){
        return 0
    }
    return total += num.pop() + soma(num)
}

console.log
(soma([...numeros]))

function count(nums){
    let total = 0
    if (nums.length === 0){
        return 0
    }
    nums.pop()
    return 1 + count(nums)
}

console.log(count([...numeros]))