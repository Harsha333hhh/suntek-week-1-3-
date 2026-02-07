// Array of student objects containing id, name and marks
const stud = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter students who scored more than 40 marks (considered pass)
let pass = stud.filter(function(i){
    return i.marks > 40;
});
console.log("students who passed are: ", pass);

// calculate average marks using reduce by dividing each mark with total length
let avg = stud.reduce(function(acc, el){
    return acc + el.marks / stud.length;
}, 0);
console.log("average marks of the class is: ", avg);

// find the student object who scored exactly 92 marks
let fin = stud.find(function(i){
    return i.marks == 92;
});
console.log("student with highest marks is: ", fin);

// find index position of student whose name is Kiran
let findin = stud.findIndex(function(i){
    return i.name == "Kiran";
});
console.log("index of student named Kiran is: ", findin);
