import "./styles.css";
import { DefaultProps } from "@/types/common";

export function AccessDeniedView({ isDesktop }: DefaultProps) {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <section
      className={`${
        !isDesktop && "flex h-screen items-center justify-center"
      } font-kanit`}
    >
      <div
        className={`${
          isDesktop && "mt-[15%]"
        } w-full flex flex-col justify-center items-center gap-3`}
      >
        <h1 className="text-7xl font-bold">403</h1>
        <p>Parece que você não tem acesso a essa página.</p>
      </div>
      {isDesktop && (
        <>
          <div className="w-full h-6 bg-yellow-500 flex gap-10 absolute bottom-[30%] rotate-12 scale-150">
            {arr.map((_el, index) => (
              <div key={index} className="w-full h-full bg-zinc-900" />
            ))}
          </div>
          <div className="w-full h-6 bg-yellow-500 flex gap-10 absolute bottom-[30%] scale-150">
            {arr.map((_el, index) => (
              <div key={index} className="w-full h-full bg-zinc-900" />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
