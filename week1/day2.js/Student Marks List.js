m= [78, 92, 35, 88, 40, 67];
let fin=m.filter(function(i){  // using filter to retrive the desired data 
    return i>=40; // valyes whuch are above or equals to 40
})
console.log("students who have passed the exam are: ",fin);
let add=m.map(function(i){  // using map to add +5 marks 
    return i+5;
})
console.log("marks after grace marks are added: ",add);
let high=m.reduce(function(acc,rel){ // using reduce to add grace marks 
    return acc>rel?acc:rel;
},0);
console.log("highest marks are: ",high);        
let fins=m.find(function(i){  // using find to find the top marks 
    return i<40;
});
console.log("first student who has failed the exam has marks: ",fins);
let findind=m.findIndex(function(i){  // using findIndex to find the index of the student who has failed in the exam 
    return i==92;
});

console.log("index of student having marks 92 is: ",findind); //finding index of student having marks 92
