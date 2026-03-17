console.log("var,let and const in js")
//var is globally scoped,let is block scoped
//var can be re-declared and updated,let can be updated but not re-declared 
var a = 10;
let b= "rishu";
//let b="heloo"  it shows error because we cannot re-declare let variable
b=5; // you can update the value of let variable but cannot re-declare it
const author="rishu"; // const variable cannot be updated or re-declared
//author="hello" it shows error because we cannot update const variable
{
    let b="how"
    console.log(b)
}
console.log(b)