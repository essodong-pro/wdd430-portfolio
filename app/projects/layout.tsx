import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Section-specific navigation */}
            <nav className="mb-6 flex gap-4 text-sm font-medium">
                <Link
                    href="/projects"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    Overview
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                    href="/projects/opensource"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    Open Source
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                    href="/projects/school"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    School
                </Link>
            </nav>

            {/* Renders the specific page segment (Overview, Open Source, or School) */}
            <main>
                {children}
            </main>
        </div>
    );
}