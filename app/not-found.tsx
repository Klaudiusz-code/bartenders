import Link from "next/link";
import { MdHome } from "react-icons/md";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] px-6">
      <div className="text-center">
        <h1 className="font-serif text-5xl md:text-9xl font-bold text-[#C5A059] mb-4 tracking-tighter">
          404
        </h1>

        <h2 className="font-serif text-xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Strona nie została znaleziona
        </h2>

        <p className="font-poppins text-gray-400 text-sm md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Wygląda na to, że wpisałeś zły adres lub strona została przeniesiona.
          Wróć na stronę główną i spróbuj ponownie.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#C5A059] text-white font-poppins text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:bg-[#b08d4a] transition-colors duration-300 shadow-lg"
        >
          <MdHome size={20} />
          <span>Wróć na stronę główną</span>
        </Link>
      </div>
    </main>
  );
}