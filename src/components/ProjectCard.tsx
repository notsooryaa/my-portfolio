import { ExternalLink, GithubIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: 'ACTIVE' | 'BETA' | 'COMPLETED' | 'DEVELOPMENT';
}

export function ProjectCard({ title, description, tech, status }: ProjectCardProps) {
  // Status badge styling based on status
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-500 text-white border-transparent';
      case 'BETA':
        return 'bg-yellow-500 text-white border-transparent';
      case 'COMPLETED':
        return 'bg-blue-500 text-white border-transparent';
      case 'DEVELOPMENT':
        return 'bg-orange-500 text-white border-transparent';
      default:
        return 'bg-gray-500 text-white border-transparent';
    }
  };

  return (
    <div className="bg-gray-900 text-white border border-gray-700 rounded-xl hover:bg-gray-800/80 transition-all duration-300 group flex flex-col gap-6">
      {/* Card Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto]">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-purple-400 leading-none font-semibold">{title}</h4>
          <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap ${getStatusBadgeStyle(status)}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-400">
          {description}
        </p>
      </div>
      
      {/* Card Content */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((technology) => (
            <span key={technology} className="inline-flex items-center justify-center rounded-md border border-cyan-400 text-cyan-400 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap">
              {technology}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center justify-center gap-2 h-8 px-3 py-1.5 text-sm font-medium rounded-md border border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400/10 transition-all outline-none focus:ring-2 focus:ring-cyan-400/50">
            <ExternalLink className="mr-1" size={14} />
            Demo
          </button>
          <button className="inline-flex items-center justify-center gap-2 h-8 px-3 py-1.5 text-sm font-medium rounded-md border border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400/10 transition-all outline-none focus:ring-2 focus:ring-purple-400/50">
            <GithubIcon className="mr-1" size={14} />
            Code
          </button>
        </div>
      </div>
    </div>
  );
}