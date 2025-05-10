const numeros = [3,4,21,7,10,20,2]

function soma(num=[]){
    if (num.length === 0){
        return 0
    }
    return num.pop() + soma(num)
}

console.log
(soma([...numeros]))

function count(nums){
    if (nums.length === 0){
        return 0
    }
    nums.pop()
    return 1 + count(nums)
}

console.log(count([...numeros]))


function maxNum(nums){
    let bigger = nums[0]
    function bigest(nums){
        if (nums.length === 0){
            return bigger
        }
        let numAtual = nums.pop()
        bigger = bigger > numAtual? bigger: numAtual
    
        return bigest(nums)
    }
    return bigest(nums)
}
console.log(maxNum([...numeros]))

function order([...list]){
    if (list.length <= 1 ){
        return list[0]
    }
    let pivo = list[Math.floor(Math.random()*list.length)]
    let bigger = []
    let less = []
    for (let i of list){
        if (i === pivo) continue
        i > pivo ? bigger.push(i): less.push(i)
    }
    return [order(less), pivo, order(bigger)]
}

console.log(order(numeros))