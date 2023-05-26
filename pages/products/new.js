import React from "react";
import { useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import axios from "axios";

export default function NewProduct() {
  //mavigator
  const router = useRouter();
  //states for three input fields
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [produtsPage, setProductPage] = useState(false);

  //function to handle form submission
  const createProduct = async (e) => {
    e.preventDefault();
    const newProduct = { productName, productDesc, productPrice };
    await axios.post("/api/products", newProduct);
    setProductPage(true);
  };

  if (produtsPage) {
    router.push("/products");
  } else {
    return (
      <Layout>
        <h1>Enter new Products</h1>

        <form onSubmit={createProduct} className=" flex flex-col gap-4">
          <label htmlFor="productName"> Product Name</label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            name={productName}
            id="productNames"
            value={productName}
            placeholder="product name"
          />
          <label htmlFor="productDesc">Product Description</label>
          <textarea
            onChange={(e) => setProductDesc(e.target.value)}
            name={productDesc}
            id="producctDecs"
            value={productDesc}
            placeholder="enter product description"
            cols="30"
            rows="30"
          ></textarea>

          <label htmlFor="productPrice"> Product Price</label>
          <input
            onChange={(e) => setProductPrice(e.target.value)}
            type="number"
            name={productPrice}
            placeholder="price"
            value={productPrice}
          />
          <button type="submit" className="button-primary w-20">
            Save
          </button>
        </form>
      </Layout>
    );
  }
}
