let marks=[10,20,30];
let skills=["html","css","javaScript"]; // student skills
console.log(marks[20]);
for(let i=0;i<marks.length;i++){ // retriving marks
    console.log(marks[i]);
    console.log(i)
}
let s=0;
let min=100;
function dec(marks){
for(let i of marks){  // using for loop 
    s+=i;
    console.log(i)
    if (i<min){
        min=i;
    }

}
console.log("min is "+min);
console.log("sum is "+s);
}

dec(marks);
