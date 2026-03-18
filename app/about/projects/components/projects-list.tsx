import Card from "../../../components/card";

type Project = {
    id: number;
    title: string;
    description: string;
    stargazers_count: number;
}

export default async function ProjectsList() {
    // Fetching data from our json-server running on port 3300
    // The server has a built-in 6s delay (configured in package.json)
    const response = await fetch('http://localhost:3300/data');
    const projects: Project[] = await response.json();


    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => (
                <li key={project.id}>
                    <Card className="h-full">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-blue-500 text-lg">{project.title}</h3>
                            <span className="text-gray-400 text-sm">⭐ {project.stargazers_count}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    </Card>
                </li>
            ))}
        </ul>
    );
}
