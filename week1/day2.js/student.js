let student=[
    {sno:1,name:"harsha",age:20},
    {sno:2,name:"ravi",age:22},
    {sno:3,name:"sejal",age:19},
    {sno:4,name:"anita",age:23},
];
//find student age <20
let result=student.filter(Element=>Element.age<20);
console.log(result);
// increase age of each student by 2
let result2=student.map(Element=>{
    Element.age+=2;
    return Element;
});
console.log(result2);
// incrememnt age of ravi by 2
let result3=student.map(Element=>{
    if(Element.name==="ravi"){
        Element.age+=2;
    }
    return Element;
});
console.log(result3);
// sum of ages of all students
let sum=student.reduce((acc,el)=>acc+el.age,0);
console.log("sum of ages of all students:",sum);


let summ=student.reduce((acc,rel)=>{
    return acc+rel.age;
},0);
console.log("sum of ages of all students:",summ);