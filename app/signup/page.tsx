"use client"
import { useState } from 'react';
import NavLayout from '@/app/nav'
import FormSuccess from "@/app/FormSuccess"
import FormError from "@/app/FormError"

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [error_message, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      setSuccess(true);
      setErrorMessage("");
    } else {
      setSuccess(false);
      setErrorMessage(res.statusText);
    }
  };

  return (
    <div>
      <NavLayout />
      <form onSubmit={handleSubmit} className="w-4/6 rounded-lg m-auto my-5 bg-zinc-200/50 border-2 border-zinc-200 flex flex-col">
        {success && <FormSuccess message='Insert has been made successfully' />}
        {error_message && <FormError message={`Error: ${error_message}`} />}
        <div>
          <label htmlFor="name" className="m-4">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="my-4"
          />
        </div>
        <div>
          <label htmlFor="email" className="m-4">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-4"
          />
        </div>
        <button type="submit" className="w-40 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
