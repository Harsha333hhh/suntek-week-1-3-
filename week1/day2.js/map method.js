//  map method (transforming elements of an array)
let salaries=[100,200,300];
// add 50 for each salary
for(let i in salaries){
    salaries[i]+=50;
}
console.log(salaries);
// using map method
let result=salaries.map(function(element){
    return element+50;
});
console.log("using map method to add 50 to each salary:");
console.log(result);
