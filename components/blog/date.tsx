import { ReactNode } from "react";

export function Date({
  children,
  update = null,
}: {
  children: ReactNode;
  update?: string;
}) {
  return (
    <div className="font-space-grotesk mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
      {children}

      {update != null && (
        <div className="mt-1 text-center text-xs">Last updated {update}</div>
      )}
    </div>
  );
}
