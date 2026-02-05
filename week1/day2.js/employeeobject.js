let emp={
    eno:1,
    name:"John",
}
console.log(emp);
console.log(emp.name);
//adding new property(it is a dynamic operation)
emp.city="New York";
console.log(emp.city)   ;
console.log(emp);
//update a property
emp.eno=3;
console.log(emp.eno);
//delete a property 
delete emp.name; //delete is a inbuilt operator in javascript
console.log(emp);
// freezing an object 
Object.freeze(emp);
emp.no=5; //it will not add this property
emp.city="Chicago"; //it will not update this property
delete emp.eno; //it will not delete this property
emp.mobile=1234567890; //it will not add this property
console.log(emp);
//reading all properties of an object
console.log(Object.keys(emp)); //it will return all property names in the form of array
console.log(Object.values(emp)); //it will return all property values in the form of array
