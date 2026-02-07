let Student={  // student object 
    roll:100,
    name:"alex",
    age:20,
    city:"hyd"
}
for(let i in Student){  // using for loop to retrivig the data 
    console.log(i);
    console.log("i is "+Student[i]);
    console.log(i,"is ",+Student[i]);

}
