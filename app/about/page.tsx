import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};


export default function About() {
    return (<div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-10">About</h1>
        <p className="text-1xl font-bold mb-10">i am a full stack developer with 5 years of experience</p>
        <p className="text-1xl font-bold mb-10">see my projects on projects page</p>
    </div>)
}
