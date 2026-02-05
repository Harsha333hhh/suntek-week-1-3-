import mongoose from 'mongoose'

const { Schema, model, models } = mongoose;

const productSchema = new Schema({
    pname: {
        type: String,
        required: [true, "product name is required"],
        minlength: [4, "min length should be 4"],
        maxlength: [6, "max length exceeded"]
    },
    price: {
        type: Number,
        required: [true, "price is required"]
    },
    pid: {
        type: Number,
        required: [true, "pid is needed"]
    }
});

export const productModel = models.product || model("product", productSchema);