//this is the model for the products table
import mongoose, { model, Schema, models } from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDesc: String,
  productPrice: { type: Number, default: 0, required: true },
});

//this checks that the model is already craeted or not
export const Products = models.Product || model("Products", ProductSchema);
