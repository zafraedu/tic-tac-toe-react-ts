export const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between overflow-hidden px-4">
      {/* Header arriba */}
      <header className="text-center pt-8">
        <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      </header>

      {/* Botones centrados */}
      <section className="flex flex-col items-center justify-center gap-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded">Jugar</button>
        <button className="px-6 py-3 bg-green-500 text-white rounded">Opciones</button>
      </section>

      <div></div>
    </div>
  );
};