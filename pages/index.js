import Layout from "../components/layout";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  //session data
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const userImage = session?.user?.image;

  return (
    <Layout>
      <div className=" flex items-center  justify-between px-5">
        <h2 className=" text-xl font-bold">Hello,{userName}</h2>
        <div>
          <img
            src={userImage}
            alt={userImage}
            className="rounded-full w-12 h-12"
          />
        </div>
      </div>
    </Layout>
  );
}
