import "./styles.css";

export function AccessDeniedView() {
  return (
    <section className="flex h-screen items-center justify-center font-kanit">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-7xl font-bold">403</h1>
        <p>Parece que você não tem acesso a essa página.</p>
      </div>
    </section>
  );
}
