import Layout from "../components/layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <div className=" m-5">
        <Link
          className=" p-2 bg-blue-600  text-white rounded-md hover:bg-blue-900"
          href={"/products/new"}
        >
          Add new product
        </Link>
      </div>
    </Layout>
  );
}
