import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import axios from "axios";

export default function Products() {
  //get all the products from the database
  const [alllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const responce = await axios.get("/api/products");
        setAllProducts(responce.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);
  console.log(alllProducts);

  return (
    <Layout>
      <div className=" m-5">
        <Link
          className=" p-2 bg-blue-600  text-white rounded-md hover:bg-blue-900"
          href={"/products/new"}
        >
          Add new product
        </Link>

        {/* lsit of all the products */}

        <div></div>
      </div>
    </Layout>
  );
}
