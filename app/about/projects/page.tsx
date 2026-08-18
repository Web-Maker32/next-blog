import { Metadata } from "next";
import { Suspense } from "react";
import ProjectsList from "@/app/about/projects/components/projects-list";
import ProjectListLoading from "./components/project-list-loading";


export const metadata: Metadata = {
    title: "Projects",
};



export default async function Projects() {
    return (
        <div className="px-4 py-8 sm:px-2 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Projects</h1>

                <div className="mb-10 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
                    Selected work showing product design, frontend development, and end-to-end delivery.
                </div>

                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectsList />
                </Suspense>
            </div>
        </div>
    )
}