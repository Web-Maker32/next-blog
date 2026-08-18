import Image from "next/image";

export const metadata = {
  title: "Tech Stack",
};

const techStack = {
  frontend: [
    {
      title: "Next.js",
      description: "The framework used for this portfolio and modern React apps.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      containerBg: "bg-black text-white dark:bg-slate-800",
      invertInDark: true,
      docsUrl: "https://nextjs.org",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first styling for fast, polished UI development.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      containerBg: "bg-cyan-50 dark:bg-cyan-950/40",
      invertInDark: false,
      docsUrl: "https://tailwindcss.com",
    },
    {
      title: "shadcn/ui",
      description: "Component library and design system patterns for consistent UI.",
      image: "https://svgl.app/library/shadcn-ui.svg",
      containerBg: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
      invertInDark: true,
      docsUrl: "https://github.com/shadcn-ui/ui",
    },
  ],
  backend: [
    {
      title: "Supabase",
      description: "Backend-as-a-service for authentication, database, and storage.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      containerBg: "bg-emerald-50 dark:bg-emerald-950/40",
      invertInDark: false,
      docsUrl: "https://supabase.com",
    },
  ],
  tooling: [
    {
      title: "Zod",
      description: "Runtime schema validation for safer form and API data handling.",
      image: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
      containerBg: "bg-blue-50 dark:bg-blue-950/40",
      invertInDark: false,
      docsUrl: "https://zod.dev",
    },
  ],
};

function TechCard({ item }) {
  return (
    <div
      className="group animate-fade-in rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-600"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl p-2 transition-transform duration-300 group-hover:scale-110 ${item.containerBg}`}
          >
            <Image
              src={item.image.trim()}
              alt={`${item.title} logo`}
              width={40}
              height={40}
              className={`h-8 w-8 object-contain ${
                item.invertInDark ? "dark:invert" : ""
              }`}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      <a
        href={item.docsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-blue-700 active:scale-95 dark:bg-blue-700 dark:hover:bg-blue-600"
      >
        View Docs
        <svg
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}

function TechSection({ title, items }) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <TechCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function StackPage() {
  return (
    <div>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in:nth-child(2) {
          animation-delay: 0.1s;
        }
        .animate-fade-in:nth-child(3) {
          animation-delay: 0.2s;
        }
        .animate-fade-in:nth-child(4) {
          animation-delay: 0.3s;
        }
        .animate-fade-in:nth-child(5) {
          animation-delay: 0.4s;
        }
      `}</style>

      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Tech Stack
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          These are the technologies I use to build modern web applications. Each tool is carefully chosen to ensure quality, performance, and maintainability.
        </p>
      </div>

      <TechSection title="Frontend" items={techStack.frontend} />
      <TechSection title="Backend & Services" items={techStack.backend} />
      <TechSection title="Development & Validation" items={techStack.tooling} />
    </div>
  );
}