import SkillCard from '@/components/SkillCard';

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-8">
                This about page shares more information about my background, education, and technical stack.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SkillCard skillName="Next.js / React" level="Intermediate" category="Frontend" />
                <SkillCard skillName="TypeScript" level="Intermediate" category="Languages" />
                <SkillCard skillName="Tailwind CSS" level="Advanced" category="Styling" />
            </div>
        </main>
    );
}