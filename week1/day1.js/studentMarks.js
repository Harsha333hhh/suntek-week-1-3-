let marks = [10, 20, 30];
let skills = ["html", "css", "javaScript"]; // student skills

// accessing index 20 which does not exist will give undefined
console.log(marks[20]);

// loop to print all marks with their index
for(let i = 0; i < marks.length; i++){ 
    console.log(marks[i]);   // print mark value
    console.log(i);          // print index
}

let s = 0;
let min = 100;

// function to calculate sum and minimum mark
function dec(marks){
  for(let i of marks){      // iterate through each mark
      s += i;               // add mark to sum
      console.log(i);

      // check for minimum value
      if (i < min){
          min = i;
      }
  }

  console.log("min is " + min);
  console.log("sum is " + s);
}

// call function with marks array
dec(marks);

