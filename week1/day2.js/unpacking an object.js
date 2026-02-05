//unpacking 
let test={
    a:10,
    b:20,
    c:30
}
//unpacking the object(destructuring)
let {a,b}=test; // it will create two variables a and b and assign the values from test object
console.log(a);
console.log(b);
console.log(test.c);//accessing the remaining property using object name

//unpacking with different variable names
let {a:alpha,b:beta}=test; // it will create two variables alpha and beta and assign the values from test object
console.log(alpha);
console.log(beta);
//destructuring saves a lot of time and code but this is only possible when we know the property names of the object and when the objecy is small in size if in case the size of the object is large then it becomes difficult to remember all the property names so in that case we can use normal way of accessing the properties using object name.

//complex object unpacking
let student={
    id:101,
    name:"Alice",
    marks:[10,20,30],
    address:{
        city:"Los Angeles",
        zip:90001
},
getData:function(){ // if we skip the name of the function it will be an anonymous function
    // object processing business logic
    console.log("Student data processed");
    console.log(this.marks[0]);
    console.log(this.address.city);
    console.log(student.marks[0]);// this and student both are same in this context
    // this always refers to the current object    
}
}
getAverage=function(){
// find avg marks of student
let total=0;
for(let mark of student.marks){ // or for(let mark of this.marks)
    total+=mark;
}
console.log("Average marks:",total/student.marks.length);
}
console.log(student.marks);
console.log(student.address.city);
console.log(student.getData());
console.log(getAverage());