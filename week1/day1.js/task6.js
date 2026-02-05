let Student={
    roll:100,
    name:"alex",
    age:20,
    city:"hyd"
}
for(let i in Student){
    console.log(i);
    console.log("i is "+Student[i]);
    console.log(i,"is ",+Student[i]);
}