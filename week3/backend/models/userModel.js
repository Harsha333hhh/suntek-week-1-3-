import {Schema,model} from 'mongoose'

// create user schema 
const userSchema=new Schema({

    // username field with validation rules
    username:{
        type:String,
        required:[true,"username is required"],
        minlength:[4,"min length should be 4"],
        maxlength:[6,"max length exceeded"]
    },

    // age field with min and max validation
    age:{
        type:Number,
        required:[true,"password is required"],
        min:[18,"age should be above 18"],
        max:[25,"age shoudld be less than 25"]
    },

    // password field
    password:{
        type:String,
        required:[true,"password is needed"]
    }

}

)

// export user model based on user schema
export const userModel= model("user",userSchema)


// create product schema
const productSchema=new Schema({

    // product name with validations
    pname:{
        type:String,
        required:[true,"product name  is required"],
        minlength:[4,"min length should be 4"],
        maxlength:[6,"max length exceeded"]
    },

    // price of product
    price:{
        type:Number,
        required:[true,"price is required"]
    },

    // product id field
    pid:{
        type:Number,
        required:[true,"pid is needed"]
    }

}

)

// export product model
export const productModel=model("product",productSchema)
