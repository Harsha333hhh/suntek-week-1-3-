 const stud = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let pass=stud.filter(function(i){
    return i.marks>40;
});
console.log("students who passed are: ",pass);
let avg=stud.reduce(function(acc,el){
    return acc+el.marks/stud.length;
},0);
console.log("average marks of the class is: ",avg);
let fin=stud.find(function(i){
    return i.marks==92;
});
console.log("student with highest marks is: ",fin);
let findin=stud.findIndex(function(i){
    return i.name=="Kiran";
});
console.log("index of student named Kiran is: ",findin);
