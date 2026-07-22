"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar productos..."
      className="
      mb-10
      w-full
      rounded-2xl
      border
      border-white/10
      bg-zinc-900
      px-6
      py-4
      outline-none
      transition
      focus:border-amber-500
      "
    />
  );
}