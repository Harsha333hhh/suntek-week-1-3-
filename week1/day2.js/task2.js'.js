// object storing subject wise marks
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
}

let total = 0;

// loop through object to calculate total marks
for(let i in marks){
  total += marks[i];
}

let great = 0;

console.log("Total Marks: " + total);

// calculate average using total subjects count from object keys
console.log("Average Marks: " + (total / Object.keys(marks).length));

// adding a new subject and marks dynamically
marks.computer = 90;
console.log(marks);

// find the greatest marks among all subjects
for(let i in marks){
  if(marks[i] > great){
      great = marks[i];
  }
}

console.log("greatest marks is :" + great);
