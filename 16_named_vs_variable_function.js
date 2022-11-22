/*
16. List the differences between named function and assigning functions to variable with
examples.
*/

/*
Named Function

1) Declare function keyword with function name.
2) It does not require variable assignment.
3) Named function can be accessed before and after the function definition.
4) It globally attached to the global object if function declaration global.

Example
function reverseString(str){
    console.log(str.split("").reverse().join("")); // tpircSavaJ
}
reverseString("JavaScript");


Assign Function to Variable

1) Declare function keyword without function name.
2) It stored in variable.
3) It execute only the program reaches the line of code.
4) It can be accessed only after the function definition.
5) It is useful for IIFE.

Example
let reverseString = (function(str){
    return str.split("").reverse().join("");
})("JavaScript");
console.log(reverseString); // tpircSavaJ
*/


