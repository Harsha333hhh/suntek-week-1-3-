let skills=["java","python"];

function skill(skills,skillname){  // passing parameters 

    let c=0;

   for(let i=0;i<=skills.length;i++){

    if (skills[i]==skillname)    // searcing skill 
    {
        c=1; // if true then assign c=1
    }
}

    if (c==0){
        console.log("skill not found");
    }
    else{
        console.log("skill found");
    }
}

skill(skills,skillname="java");  // passing parameter values
