import React from "react";

type ComparisonTableProps = {
  columns: string[];
  rows: React.ReactNode[][];
};

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200">
      <table className="w-full min-w-[680px] border-collapse text-sm">
        <thead>
          <tr className="bg-zinc-50">
            {columns.map((col) => (
              <th
                key={col}
                className="text-left align-bottom px-4 py-3 text-xs font-mono font-normal text-zinc-400 uppercase tracking-widest border-b border-zinc-200"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="align-top border-b border-zinc-100 last:border-0"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-4 leading-relaxed ${
                    j === 0 ? "text-zinc-700 font-medium" : "text-zinc-500"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
