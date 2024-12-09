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

  return(
    <main className="p-4">
      
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">To Do List App</h1>
        </div>
        { user ? (
          <div>
            <div className="flex justify-center mt-4">
              <p>Welcome to the To-Do List Application</p>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/to-do">Click here to go to the To-Do List</Link>
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={handleLogout} className="bg-blue-500 rounded px-2 py-1 text-2xl">Logout</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center mt-4">
              <p className="text-lg">Please Log-in to continue.</p>
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={handleLogin} className="bg-blue-500 rounded px-2 py-1 text-2xl">Login</button>
            </div>
          </div>
        )}
    </main>
  );
}
