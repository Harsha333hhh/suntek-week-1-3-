//array 
let skills=["html","css","js","react"];
//accessing array elements
console.log(skills[0]);
for(let i of skills){
    console.log(i);
}
console.log("array destructuring");
let [skill1,skill2,skill3,skill4]=skills; //array destructuring
console.log(skill1);
console.log(skill2);
//inserting
//at start
console.log("inserting elements at start");
skills.unshift("bootstrap");
console.log(skills);
//at end
console.log("inserting elements at end");
skills.push("angular");
console.log(skills);
//in btween
console.log("inserting elements at btween");
skills.splice(2,0,"sass"); //at index 2 , 0 elements to be deleted and "sass" to be added
console.log(skills);

//deleting
//from start
console.log("deleting elements from start");
skills.shift();
console.log(skills);
//from end
console.log("deleting elements from end");
skills.pop();
console.log(skills);    
//from btween
console.log("deleting elements from btween");
skills.splice(2,1); //at index 2 , 1 element to be deleted
console.log(skills);