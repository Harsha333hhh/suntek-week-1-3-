// array containing course names
const cor = ["javascript", "react", "node", "mongodb", "express"];

// filter courses whose length is greater than 5 characters
let len = cor.filter(function(i){
    return i.length > 5;
});
console.log("course names with length greater than 5 are: ", len);

// convert all course names to uppercase using map
let up = cor.map(function(i){
    return i.toUpperCase();
});
console.log("course names in uppercase are: ", up);

// join all course names into a single comma separated string
let sing = cor.reduce(function(acc, rel){
    return acc + "," + rel;
});
console.log("course names in a single string are: ", sing);

// find the course name that exactly matches "react"
let fin = cor.find(function(i){
    return i === "react";
});
console.log("course name equal to react is: ", fin);

// find index position of course name "node"
let finIn = cor.findIndex(function(i){
    return i === "node";
});
console.log("index of course name equal to node is: ", finIn);
