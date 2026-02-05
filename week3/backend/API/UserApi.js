import exp from "express"
import { userModel } from '../models/userModel.js'
import { productModel } from '../models/productModel.js'

const userApp = exp.Router();

userApp.get("/users", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { userApp };
const productApp = exp.Router();

productApp.get("/product", async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { productApp };

// user api routes

//create user 
userApp.post('/users',async(req,res)=>{
    let newUser=req.body
    let newuserDoc=new userModel(newUser)
    await newuserDoc.save()
    res.status(201).json({message:"user created",payload:newuserDoc})
})
// read all users 
userApp.get('/users',async(req,res)=>{})


// read users by objjectID
userApp.get("/users/:id",async(req,res)=>{
    // get ibj id from url param
    let objId=req.params.id;
    //find user in db
    let userObj=await userModel.findById(objId)
    // send res
    res.status(200).json({message:"user",payload:userObj})

})

// update user 

userApp.put("/users/:id",async(req,res)=>{

    // GEt objecy id from params
    let objId=req.params.id;
    //get modified user from req
    let modifieduser=req.body;
    //make update
    let latestUser=await userModel.findByIdAndUpdate(objId,{$set:{...modifieduser}},{new:true,runValidators:true})
    // send res
    res.status(200).json({message:"user modiofied",payload:latestUser})

});

// delete user by id

userApp.delete("/users/:id",async(req,res)=>{
// get obj id
let objId=req.params.id;
//delete user by id 
let deleteduser=await userModel.findByIdAndDelete(objId);
res.status(200).json({message:"user removed",payload:deleteduser});

});


// create product
productApp.post("/product",async(req,res)=>{
    let newProduct=req.body;
    let newProductsDoc=new productModel(newProduct);
    await newProductsDoc.save();
    res.status(201).json({message:"product added",payload:newProductsDoc});
})

// find product by id 

productApp.get("/product/:id",async(req,res)=>{
    let productId=req.params.id;
    let productObj=await productModel.findById(productId);
    res.status(200).json({message:"product found",payload:productObj});

})

// delete product

productApp.delete("/product/:id",async(req,res)=>{
    let productId=req.params.id;
    let deletedProduct=await productModel.findByIdAndDelete(productId);
    res.status(200).json({message:"the product is deleted",payload:deletedProduct});
})