import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">About</h1>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                I’m a full-stack developer with 2 year of focused learning and hands-on experience building web applications.
            </p>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                I specialize in creating polished web applications with strong UX, modern frontend architecture, and reliable backend integrations.
            </p>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="font-semibold">What I do:</p>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Design and build responsive interfaces with React and Tailwind.</li>
                    <li>Implement backend services, REST APIs, and database workflows.</li>
                    <li>Ship accessible, maintainable applications with TypeScript.</li>
                </ul>
            </div>
        </div>
    );
}
