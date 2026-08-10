import { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6">
      <div>{children}</div>
      <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
        <h2 className="mb-3 text-lg font-semibold">You may also like</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
          <li>First blog post</li>
          <li>Second blog post</li>
        </ul>
      </div>
    </div>
  );
}