import { useState } from "react";

function App() {
  const [color, setColor] = useState("Black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2 py-2">
        <div className="px-10 py-5 rounded-xl shadow-xl  bg-cyan-900 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            onClick={() => setColor("#475569")}
            type="button"
            className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Slate-600
          </button>
          <button
            onClick={() => setColor("#7c3aed")}
            type="button"
            className="rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
          >
            Violet-600
          </button>
          <button
            onClick={() => setColor("#0284c7")}
            type="button"
            className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Sky-600
          </button>
          <button
            onClick={() => setColor("#16a34a")}
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Green-600
          </button>
          <button
            onClick={() => setColor("#0d9488")}
            type="button"
            className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Teal-600
          </button>
          <button
            onClick={() => setColor("#b45309")}
            type="button"
            className="rounded-md bg-amber-700 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Amber-700
          </button>
          <button
            onClick={() => setColor("#4f46e5")}
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Indigo-600
          </button>
          <button
            onClick={() => setColor("#0891b2")}
            type="button"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Cyan-600
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
