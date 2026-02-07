// import mongoose library
import mongoose from 'mongoose'

// extract required classes from mongoose
const { Schema, model, models } = mongoose;

// define schema structure for product collection
const productSchema = new Schema({

    // product name field with validations
    pname: {
        type: String,
        required: [true, "product name is required"],
        minlength: [4, "min length should be 4"],
        maxlength: [6, "max length exceeded"]
    },

    // price field must be a number and mandatory
    price: {
        type: Number,
        required: [true, "price is required"]
    },

    // product id field
    pid: {
        type: Number,
        required: [true, "pid is needed"]
    }
});

// export model, reuse if already created to avoid overwrite error
export const productModel = models.product || model("product", productSchema);
