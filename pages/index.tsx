import { Sidebar } from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome, {session.user?.name}</h1>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
        {/* Content goes here */}
      </main>
    </div>
  );
}