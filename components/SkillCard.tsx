interface SkillCardProps {
    skillName: string;
    level: string;
    category: string;
}

export default function SkillCard({ skillName, level, category }: SkillCardProps) {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{category}</span>
            <h3 className="text-lg font-bold text-gray-800 mt-1">{skillName}</h3>
            <p className="text-sm text-gray-600 mt-1">Proficiency: {level}</p>
        </div>
    );
}