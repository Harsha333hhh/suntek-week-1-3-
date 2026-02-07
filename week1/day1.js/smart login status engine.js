function Login(){

    // variables representing user login and profile status
    let isLoggedIn = true;
    let isprofileComplete = true;

    // check if user is not logged in
    if (isLoggedIn == false){
        console.log("Please log");
    }

    // user logged in but profile not completed
    else if (isLoggedIn == true && isprofileComplete == false){
        console.log("complete your profile.");
    }

    // user logged in and profile is complete
    else if (isLoggedIn == true && isprofileComplete == true){
        console.log("Welcome back");
    }

    // fallback case for any unexpected condition
    else{
        console.log("Retry");
    } 
}

// call the function to execute login logic
Login();
