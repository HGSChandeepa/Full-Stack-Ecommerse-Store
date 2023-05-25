import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
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
    return <div>Loged in {session.user.email}</div>;
  }
}
