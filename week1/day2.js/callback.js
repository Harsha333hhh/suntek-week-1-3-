//callback function means a function which is passed as an argument to another function 
// in js it is possible to pass function as an argument to another function
function test(a){
    console.log(a());// if we put () after a then it will execute the function and return the value if not then it will return the function definition
}
test(function(){ // here ananymous function is called as callback function
    return 123;
})
