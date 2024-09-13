import Link from 'next/link'

export default function NavLayout() {
  return (
    <div>
      <nav className="flex h-10 items-center bg-sky-900">
        <Link href="./" className="mx-5 text-red-500 text-xl hover:text-red-300 hover:underline">Accueil</Link>
        <Link href="./login" className="mx-5 text-red-500 text-xl hover:text-red-300 hover:underline">Connexion</Link>
      </nav>
      <h1>Home</h1>
    </div>
  );
}
