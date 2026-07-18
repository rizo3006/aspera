interface Props {
  number: string;
  label: string;
}

export default function Stat({ number, label }: Props) {
  return (
    <div>
      <h3 className="text-3xl font-black text-white">{number}</h3>
      <p className="mt-2 text-zinc-400">{label}</p>
    </div>
  );
}