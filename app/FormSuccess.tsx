export default function FormSuccess({ message }: { message: string }) {
  return (
    <div className="w-11/12 mx-auto my-3 rounded-3xl border-2 border-green-500 p-4 bg-green-500/50">
      <h1>{message}</h1>
    </div>
  );
}
