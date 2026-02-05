import exp from "express"
import {userApp} from "./API/UserApi.js"
import {productApp} from "./API/UserApi.js";
import {connect} from "mongoose"
const app = exp();
const port = process.env.PORT || 4000;

// connect to db server
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("db connection success")
        app.listen(port,()=>console.log("server is running in port 4000"))
    }
    catch(err){
        console.log("err in db",err)
    }
}
connectDB();

// JSON middleware should be registered before routes
app.use(exp.json())

// if path starts with /user-api , forward req to userapp
app.use("/user-api", userApp);
// if path starts with 
app.use("/product-api",productApp);

// error handling middleware
function errorHandler(err,req,res,next){
res.json({message:"this contains erroe",reason:err.message})
}
app.use(errorHandler)
// middleware errorhandlers should be at the end of the code always 