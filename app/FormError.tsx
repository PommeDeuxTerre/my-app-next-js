export default function FormError({ message }: { message: string }) {
  return (
    <div className="w-11/12 mx-auto my-3 rounded-3xl border-2 border-red-500 p-4 bg-red-500/50">
      <h1>{message}</h1>
    </div>
  );
}
