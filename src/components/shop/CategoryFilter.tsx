"use client";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
}

const categories = [
  "Todos",
  "Playeras",
  "Cadenas",
  "Esclavas",
  "Accesorios",
];

export default function CategoryFilter({
  selected,
  setSelected,
}: Props) {
  return (
    <div className="mb-10 flex gap-3 flex-wrap">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`rounded-full px-5 py-2 transition

          ${
            selected === category
              ? "bg-white text-black"
              : "bg-zinc-900 text-white"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}