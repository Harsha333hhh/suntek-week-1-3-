let marks=[90,70,40,89,56]
//filter(selecting elements based on condition)
//get all marks less than 50
let result=marks.filter(function(element){
    return element<50;
})
console.log("marks less than 50:",result);

//write a function that can extract marks greater than 70 pack them into an array and return it 
// using filter method
let result2=marks.filter(function(element){
    return element>70;
})
console.log("usinf filter method to get marks greater than 70:");
console.log(result2);
//using for..of loop
let l=[]
for(let i of marks){
    if (i>70){
        l.push(i);

    }}
console.log("using for..of loop to get marks greater than 70:");
console.log(l);
// array function
let result3=marks.filter(element=>element>70);
console.log("using arrow function to get marks greater than 70:");
console.log(result3);

//find all marks btw 30 and 90 
let result4=marks.filter(function(element){
    return element>30 && element<90;
})
console.log("marks btw 30 and 90:",result4); 

//map method (transforming elements of an array)