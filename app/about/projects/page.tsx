import { Metadata } from "next";
import { Suspense } from "react";
import ProjectsList from "@/app/about/projects/components/projects-list";
import ProjectListLoading from "./components/project-list-loading";


export const metadata: Metadata = {
    title: "Projects",
};



export default async function Projects() {
    return (
        <div className="p-20">
            <h1 className="text-4xl font-bold mb-10">Projects</h1>

            <div className="text-1xl font-bold mb-10">These are my projects</div>

            <Suspense fallback={<ProjectListLoading />}>
                <ProjectsList />
            </Suspense>

        </div>
    )
}