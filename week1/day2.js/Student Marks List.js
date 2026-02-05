m= [78, 92, 35, 88, 40, 67];
let fin=m.filter(function(i){
    return i>=40;
})
console.log("students who have passed the exam are: ",fin);
let add=m.map(function(i){
    return i+5;
})
console.log("marks after grace marks are added: ",add);
let high=m.reduce(function(acc,rel){
    return acc>rel?acc:rel;
},0);
console.log("highest marks are: ",high);        
let fins=m.find(function(i){
    return i<40;
});
console.log("first student who has failed the exam has marks: ",fins);
let findind=m.findIndex(function(i){
    return i==92;
});
console.log("index of student having marks 92 is: ",findind);