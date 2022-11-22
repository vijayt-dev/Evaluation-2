/*
1. Display prime numbers 1 to 200?
*/

function findPrimeNumber(num){
    let count = 0;
    for(let i = 1; i <= num; i++){
            if(num % i === 0){
                count++;
            }
    }
    if(count === 2){
        return num;
    }
}

for(let i = 1; i <= 200; i++ ){
    let primeNumber = findPrimeNumber(i);
    if(primeNumber){
        console.log(primeNumber);
    }
}

