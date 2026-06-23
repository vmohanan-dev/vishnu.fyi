type Metric = {
  value: string;
  label: string;
};

export function Metrics({ items }: { items: Metric[] }) {
  return (
    <div
      className={`grid gap-px bg-zinc-200 border border-zinc-200 rounded-lg overflow-hidden ${
        items.length === 2
          ? "grid-cols-2"
          : items.length === 4
            ? "grid-cols-2 sm:grid-cols-4"
            : "grid-cols-3"
      }`}
    >
      {items.map((m) => (
        <div key={m.label} className="bg-white px-5 py-6 text-center">
          <div className="text-3xl font-semibold tracking-tight text-zinc-900 tabular-nums">
            {m.value}
          </div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-2">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}
