import { notFound } from "next/navigation";

const title = {
    first: "hello first",
    second: "hello second"
}

// 1. Define the type for the dynamic route parameters
type Props = {
    params: Promise<{ slug: string }>;
};

// 2. Update metadata generation to await params
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    return {
        title: title[slug as keyof typeof title] || "Blog Post"
    };
}

// 3. Update the Page component to be async and await params
export default async function BlogPage({ params }: Props) {
    const { slug } = await params;

    if (!["first", "second"].includes(slug)) {
        notFound();
    }

    return (
        <div className="p-8">
            <h1>{title[slug as keyof typeof title]}</h1>
        </div>
    );
}