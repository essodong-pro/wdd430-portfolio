import { Project } from '@/lib/projects-db';

async function getSchoolProjects(): Promise<Project[]> {
    const res = await fetch('http://localhost:3000/api/projects?type=school', {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch school projects');
    }
    return res.json();
}

export default async function SchoolProjectsPage() {
    const projects = await getSchoolProjects();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    School Projects
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Here are the assignments and collaborative web development projects I built throughout my coursework.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-5 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 space-y-3"
                    >
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {project.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded dark:bg-blue-900 dark:text-blue-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}