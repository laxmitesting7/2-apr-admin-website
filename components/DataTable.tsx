import { cn } from "@/lib/utils";

type DataTableProps = {
  headings: string[];
  rows: React.ReactNode[][];
  className?: string;
};

export function DataTable({ headings, rows, className }: DataTableProps) {
  return (
    <div className={cn("overflow-hidden rounded-[28px] border border-slate-200 bg-white", className)}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {headings.map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 text-sm text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
