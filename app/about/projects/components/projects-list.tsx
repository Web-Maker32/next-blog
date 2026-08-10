import Card from "../../../components/card";

type Project = {
  id: number;
  title: string;
  description: string;
  stargazers_count: number;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Next Blog",
    description: "A polished personal blog starter built with Next.js app router.",
    stargazers_count: 42,
  },
  {
    id: 2,
    title: "Portfolio Site",
    description: "A lightweight portfolio site focused on content and clean presentation.",
    stargazers_count: 18,
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "A flexible dashboard foundation with reusable UI cards and sections.",
    stargazers_count: 27,
  },
];

export default function ProjectsList() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.id}>
          <Card className="h-full">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold text-blue-600">{project.title}</h3>
              <span className="text-sm text-gray-400">⭐ {project.stargazers_count}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}
