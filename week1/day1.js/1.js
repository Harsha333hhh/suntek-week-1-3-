console.log('This is file 1.js');
console.log('Hello from 1.js!');
console.log('1.js is executing some code.');
let username="JohnDoe";
let marks=[95, 90, 98];
let status=true;
let student={
    sno:20,
    sname:"Alice"
}
let b;
console.log(`Student Number: ${student.sno}, Student Name: ${student.sname}`);
console.log(typeof b);
console.log(typeof username); 
console.log(typeof marks);
console.log(typeof status); 
function greet(d,f){
    console.log('this is a function from 1.js');
    console.log(`Sum is: ${d+f}`);
}
greet(20,10);
function greatest(x,y,z){
    console.log(x,y,z);
    if (x>y && x>z) {
        console.log("a is greatest");
    }
    else if (y>x && y>z) {
        console.log("y is greatest");
    }
    else{
        console.log("c is greatest");
    }
}
greatest(10,20,15);