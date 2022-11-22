/*
4. Show an example ofSafegrounding function parameters?
*/

function safe(arr){
    if(typeof arr === "object" && "length" in arr){
        arr.forEach(function(value){
            console.log(value);
        });
    }
}
safe([1,2,3,4]);