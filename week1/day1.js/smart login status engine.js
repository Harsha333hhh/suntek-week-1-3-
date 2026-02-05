function Login(){
    let isLoggedIn=true;
    let isprofileComplete=true;
    if (isLoggedIn==false){
        console.log("Please log");
    }
    else if (isLoggedIn==true && isprofileComplete==false){
        console.log("complete your profile.");
    }
    else if (isLoggedIn==true && isprofileComplete==true){
        console.log("Welcome back");
    }
    else{
        console.log("Retry");
    } 
}
Login();