import { MATCHED_PATH_HEADER } from "next/dist/lib/constants";
import { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div>
                {children}
            </div>
            <div className="mt-8">
                <h1 className="mb-4 text-xl font-bold">you may also like</h1>

                <ul>
                    <li>frist blog post</li>
                    <li>second blog post</li>
                </ul>
            </div>
        </div>
    );
}