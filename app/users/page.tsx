import { PrismaClient } from '@prisma/client';
import NavLayout from '@/app/nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Users",
  description: "Page to see all users",
};
const prisma = new PrismaClient();

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <NavLayout />
      <h1 className="text-4xl">Users</h1>
      <div> {users.map((user) => (<div key={user.id}>
        <h2 className="text-3xl">username: <span className="text-sky-400">{user.name}</span></h2>
        <p className="text-3xl">email: <span className="text-sky-400">{user.email}</span></p>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Page;
