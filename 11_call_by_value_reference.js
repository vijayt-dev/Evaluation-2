/*
11. In the Javascript function, what are the differences between call by value and reference?
*/

/*
Call by Value
Passing value in function arguments it copy new value to a parameter the change is not reflected globally.

Example
const x = 10;
function change(value){
    value = 20;
}
change(x);
console.log(x); //10

Call by Object
Passing an object in function arguments it doesn't copy value instead it reference to object to a parameter that change the object properties.

Example
const obj = {value:10};
function change(obj){
    obj.value = 20;
}
change(obj);
console.log(obj); // { value: 20 }
*/
