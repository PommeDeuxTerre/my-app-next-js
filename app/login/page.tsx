import Link from 'next/link'
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Login",
  description: "Page to log in",
};

export default function LoginPage() {
  return (
    <div>
      <nav className="flex h-10 items-center bg-sky-900">
        <Link href="./" className="mx-5 text-red-500 text-xl hover:text-red-300 hover:underline">Home</Link>
        <Link href="./login" className="mx-5 text-red-500 text-xl hover:text-red-300 hover:underline">Log in</Link>
      </nav>
      <h1>Login</h1>
    </div>
  );
}
