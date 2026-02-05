let skills=["java","python"];
function skill(skills,skillname){
    let c=0;
   for(let i=0;i<=skills.length;i++){
    if (skills[i]==skillname)
    {
        c=1;
    }
}
    if (c==0){
        console.log("skill not found");
    }
    else{
        console.log("skill found");
    }
}
skill(skills,skillname="java");
