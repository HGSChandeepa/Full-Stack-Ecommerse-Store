import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/products";

export default async function handler(req, res) {
  const { method } = req;

  // Connect to the database
  await mongooseConnect();

  if (method === "POST") {
    const { productName, productDesc, productPrice } = req.body;

    // Create a new product
    const newProduct = new Product({
      productName,
      productDesc,
      productPrice,
    });

    // Save the product
    await newProduct.save();

    res.status(200).json({ message: "Product created" });
  }
}
