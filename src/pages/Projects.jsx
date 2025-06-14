import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/portfolio"
    },
    {
      title: "E-commerce App",
      description: "A mock e-commerce application with product listings and cart functionality.",
      technologies: ["React", "Redux", "Firebase"],
      githubLink: "https://github.com/yourusername/ecommerce-app"
    },
    {
      title: "Task Manager",
      description: "A task management application with drag-and-drop functionality.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/task-manager"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}