function label(){
    let price=1299;
    let label="";
    if (price<500){
        label="Budget";
    }
    else if (price>=500 && price<=1000){
        label="Midrange";
    }
    else if (price>1000){
        label="Premium";
    }
    else{
        console.log("Invalid Price");
    }
    console.log("label is"+label);
}
label();