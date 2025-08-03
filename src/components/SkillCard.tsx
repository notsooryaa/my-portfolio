import { type ReactNode } from 'react';

interface SkillCardProps {
  category: string;
  icon: ReactNode;
  skills: string[];
}

export function SkillCard({ category, icon, skills }: SkillCardProps) {
  return (
    <div className="bg-gray-900 text-white border border-gray-700 rounded-xl text-center flex flex-col gap-6">
      {/* Card Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h4 className="text-white leading-none font-semibold">{category}</h4>
      </div>
      
      {/* Card Content */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill) => (
            <div key={skill} className="p-2 bg-gray-800 rounded border border-gray-600 text-gray-300 text-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}