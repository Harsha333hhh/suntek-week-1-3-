temp= [32, 35,28, 40, 38, 30, 42,45];
let filt=temp.filter(function(i){
    return i>35;

});
console.log("temperatures greater than 35 are: ",filt);

let red=temp.reduce(function(acc,el){
    return (acc+el)/temp.length;
},0);
console.log("average temperature is: ",red);

let fin=temp.find(function(i){
    return i>40;
})
console.log("first temperature greater than 40 is: ",fin);

let findIndex=temp.findIndex(function(i){
    return i==28;
})
console.log("index of temperature equal to 28 is: ",findIndex);

let conv=temp.map(function(i){
    return ((i-32)*5)/9;
});
console.log("temperatures in celsius are: ",conv);

