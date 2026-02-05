let marks=[90,70,40,89,56]
let sum=0;
// accumulator stores the value of the immediate previous computation
let result=marks.reduce((accumulator,element)=>{
    return accumulator+element;
},0); // 0 is the initial value of accumulator
console.log("sum of marks using reduce method:",result);
// small element of the array 
let small=marks.reduce((acc,el)=>acc<el?acc:el);
console.log("small element of the array:",small);