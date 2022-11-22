/*
    7. Difference between map, reduce and filter methods? With an example
*/

/*
map
1) The map method is used to convert each item of an array.
2) Takes 3 arguments in callback function.
    1) value
    2) Index
    3) Array
3) It returns array.

Example
const city = ["Coimbatore","Chennai"];
const cityLength = city.map(function(value){
    return value.length;
});
console.log(cityLength); // [ 10, 7 ]

filter
1) The filter method is used to select certain items of an array.
2) Takes 3 arguments in callback function.
    1) value
    2) Index
    3) Array
3)  It returns array.

Example
const password = ["123456","password","12","345"];
const strongPassword = password.filter(function(value){
    return value.length >= 5; 
});
console.log(strongPassword); // [ '123456', 'password' ]

reduce
1) The reduce method each array element to produce a single value.
2) Takes 4 arguments in callback function.
    1) The total (the initial value / previously returned value)
    2) Value
    3) Index
    4) Array
3) It return single value.

Example
const arr = [1,2,3];
const sum = arr.reduce(function(previousValue,currentValue){
    return previousValue + currentValue;
},0);
console.log(sum); // 6
*/


