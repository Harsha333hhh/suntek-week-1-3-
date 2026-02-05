//function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
// function expression
const farewell = function(name) {// this code provides more security to the code and not to the application
    return "Goodbye, " + name + "!";

} 
//arrow function
let thankYou = (name) => {
    return "Thank you, " + name + "!";
}
//arrow function(simplify function expression)
let welcome = name => "Welcome, " + name + "!";
