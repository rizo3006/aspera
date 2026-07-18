type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}