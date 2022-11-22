/*
8. Count Total number of zeros from 1 up to 50
*/

let count = 0;

for(let i = 1; i <= 50; i++){
    const number = i.toString();
    number.split("").forEach(function(value){
        if(Number(value) === 0)
            count++;
    });
}
console.log(`Total No of Zeros from 1 to 50 : ${count}`);
