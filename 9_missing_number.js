/*
9. The following array of numbers show the missing number? ([1,2,3,5,6])
*/

const arr = [1,2,3,5,6];
const missingArr = [];
arr.reduce(function(previousValue,currentValue){
        if(Math.abs(previousValue - currentValue) === 1){
           return currentValue;
        }else{
            for(let i = previousValue + 1; i < currentValue; i++){
                missingArr.push(i);
            }
            return currentValue;
        }
});
console.log(missingArr);



 