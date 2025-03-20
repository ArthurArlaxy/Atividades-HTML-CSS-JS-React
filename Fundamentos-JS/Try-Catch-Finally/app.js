function sum (a,b){
    number1 = Number(a)
    number2 = Number(b)
    if(isNaN(number1) || isNaN(number2)){
        throw new Error('Os paramatros precisam ser números')
    }else{
        return number1 + number2
    }
}


try{
    console.log(awdawd)
    console.log(sum(3,true))
    console.log(sum('zero', 2))
    console.log(sum(1,10))
}
catch (error){
    console.log('Ocorreu um erro!')
    console.log(error.message)
}
finally{
    console.log('Calculos finalizados')
}

