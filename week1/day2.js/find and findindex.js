let marks=[90,70,40,89,56]

//find element equal to 23
let result=marks.find(element=>element===90);// if not found returns undefined
console.log(result);
//find index of element equal to 23
let resultIndex=marks.findIndex(element=>element===23); // if not found returns -1
console.log(resultIndex);