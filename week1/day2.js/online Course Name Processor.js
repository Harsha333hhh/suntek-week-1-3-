const cor= ["javascript", "react", "node", "mongodb", "express"];
let len=cor.filter(function(i){
    return i.length>5;
});
console.log("course names with length greater than 5 are: ",len);
let up=cor.map(function(i){
    return i.toUpperCase();
})
console.log("course names in uppercase are: ",up);
let sing=cor.reduce(function(acc,rel){
    return acc+","+rel;

});
console.log("course names in a single string are: ",sing);
let fin=cor.find(function(i){
    return i==="react";
});
console.log("course name equal to react is: ",fin);

let finIn=cor.findIndex(function(i){
    return i==="node";
});
console.log("index of course name equal to node is: ",finIn);