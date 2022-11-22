/*
2. From two sorted arrays, how would you find the common numbers?
*/

const arr1 = [1,2,3,6,8,16];
const arr2 = [0,1,3,5,7];

const commonArray = arr1.filter(function(outerValue){
    return outerValue === arr2.find(function(innerValue){
         return outerValue === innerValue;
    });
});
console.log(commonArray);
