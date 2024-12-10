"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Login() {
  
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogin() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">To Do List App</h1>
            {user ? (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <p>Welcome to the To-Do List Application</p>
                </div>
                <div className="mb-4">
                    <Link className="text-blue-600 hover:text-blue-300 underline"href="/to-do">Click Here to Continue To The To-Do List</Link>
                </div>
                <div className="mb-4">
                    <button onClick={handleLogout} className="bg-blue-500 text-white rounded px-4 py-2 text-xl">Logout</button>
                </div>
            </div>
            ) : (
                <div className="bg-slate-100 p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <p className="text-lg">Please Log-in to continue.</p>
                    </div>
                    <div className="mb-4">
                        <button onClick={handleLogin} className="bg-blue-500 text-white rounded px-4 py-2 text-xl">Login</button>
                    </div>
                </div>
            )}
        </div>
    </main>
);
}
