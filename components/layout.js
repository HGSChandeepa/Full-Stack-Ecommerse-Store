import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/nav";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className=" flex items-center justify-center w-screen h-screen bg-gray-800 ">
        <button
          onClick={() => signIn("google")}
          className=" text-white bg-blue-600 px-4 py-2 rounded-md"
        >
          Login with Google
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row w-screen h-screen bg-gray-800 ">
        <Nav />
        <div className=" bg-white flex-grow  rounded-lg m-2 p-2 ">
          {children}
        </div>
      </div>
    );
  }
}
