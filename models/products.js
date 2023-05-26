//this is the model for the products table
import mongoose, { model, Schema, models } from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDesc: String,
  productPrice: { type: Number, default: 0, required: true },
});

export const Product = models.Product || model("Product", ProductSchema);




