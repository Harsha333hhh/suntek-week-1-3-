import {Schema,model} from 'mongoose'

// create user schema 
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minlength:[4,"min length should be 4"],
        maxlength:[6,"max length exceeded"]

    },
    age:{
        type:Number,
        required:[true,"password is required"],
        min:[18,"age should be above 18"],
        max:[25,"age shoudld be less than 25"]
    },
    password:{
        type:String,
        required:[true,"password is needed"]
    }

}

)
export const userModel= model("user",userSchema)
// create product model with that schema 

const productSchema=new Schema({
    pname:{
        type:String,
        required:[true,"product name  is required"],
        minlength:[4,"min length should be 4"],
        maxlength:[6,"max length exceeded"]

    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    pid:{
        type:Number,
        required:[true,"pid is needed"]
    }

}

)
export const productModel=model("product",productSchema)