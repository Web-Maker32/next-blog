import Image from "next/image";

import supabase from "public/images/supabase.svg";
import vue from "public/images/vue.svg";
import windows from "public/images/windows.svg";
import typescript from "public/images/typescript.svg";

export const metadata = {
    title: "Photos",
};

export default function PhotosPage() {
    return (
        <div>
            <h1 className="text-4xl font-semibold mb-4 gap-4">My Photos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-120 overflow-hidden">
                    <Image fill src={vue} alt="vue" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" priority={true} quality={100} />
                </div>
                <div className="relative h-120 overflow-hidden">
                    <Image fill src={windows} alt="windows" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" priority={true} quality={100} />
                </div>
                <div className="relative h-120 overflow-hidden">
                    <Image fill src={typescript} alt="typescript" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" priority={true} quality={100} />
                </div>
                <div className="relative h-120 overflow-hidden">
                    <Image fill src={supabase} alt="supabase" className="object-cover w-full h-full" sizes="(max-width: 768px) 100vw, 50vw" priority={true} quality={100} />
                </div>
            </div>
        </div>

    );
}