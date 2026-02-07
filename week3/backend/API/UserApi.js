// import express module
import exp from "express"

// import mongoose models for user and product
import { userModel } from '../models/userModel.js'
import { productModel } from '../models/productModel.js'

// create router for user related APIs
const userApp = exp.Router();

// get all users from database
userApp.get("/users", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { userApp };

// create router for product related APIs
const productApp = exp.Router();

// get all products from database
productApp.get("/product", async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { productApp };


// -------- USER API ROUTES --------

// create new user
userApp.post('/users', async (req, res) => {

    // get user data from request body
    let newUser = req.body;

    // create mongoose document
    let newuserDoc = new userModel(newUser);

    // save user to database
    await newuserDoc.save();

    res.status(201).json({ message: "user created", payload: newuserDoc });
});

// placeholder route to read all users (not implemented)
userApp.get('/users', async (req, res) => { });


// read user by object id
userApp.get("/users/:id", async (req, res) => {

    // get object id from url parameter
    let objId = req.params.id;

    // find user in database by id
    let userObj = await userModel.findById(objId);

    // send user as response
    res.status(200).json({ message: "user", payload: userObj });
});


// update user by id
userApp.put("/users/:id", async (req, res) => {

    // get object id from params
    let objId = req.params.id;

    // get modified user data from request body
    let modifieduser = req.body;

    // update user and return latest document
    let latestUser = await userModel.findByIdAndUpdate(
        objId,
        { $set: { ...modifieduser } },
        { new: true, runValidators: true }
    );

    res.status(200).json({ message: "user modiofied", payload: latestUser });
});


// delete user by id
userApp.delete("/users/:id", async (req, res) => {

    // get object id from params
    let objId = req.params.id;

    // delete user from database
    let deleteduser = await userModel.findByIdAndDelete(objId);

    res.status(200).json({ message: "user removed", payload: deleteduser });
});


// -------- PRODUCT API ROUTES --------

// create new product
productApp.post("/product", async (req, res) => {

    // get product data from body
    let newProduct = req.body;

    // create mongoose document
    let newProductsDoc = new productModel(newProduct);

    // save product to database
    await newProductsDoc.save();

    res.status(201).json({ message: "product added", payload: newProductsDoc });
});

// find product by id
productApp.get("/product/:id", async (req, res) => {

    // get product id from url
    let productId = req.params.id;

    // find product in database
    let productObj = await productModel.findById(productId);

    res.status(200).json({ message: "product found", payload: productObj });
});

// delete product by id
productApp.delete("/product/:id", async (req, res) => {

    // get product id from url
    let productId = req.params.id;

    // delete product from database
    let deletedProduct = await productModel.findByIdAndDelete(productId);

    res.status(200).json({ message: "the product is deleted", payload: deletedProduct });
});
