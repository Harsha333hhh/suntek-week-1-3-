const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
}
let total = 0;
let markCount = 0;
for(let i in marks){
  total+=marks[i];
}
let great=0;
console.log("Total Marks: " + total);
console.log("Average Marks: " + (total/Object.keys(marks).length));
marks.computer = 90;
console.log(marks);
for(let i in marks){
    if(marks[i]>great){
        great=marks[i];
    }
}
    console.log("greatest marks is :"+great);