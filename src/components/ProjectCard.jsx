export default function ProjectCard({ title, description, technologies, githubLink, image }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg dark:shadow-xl dark:shadow-gray-900/20 overflow-hidden hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-gray-900/30 transition duration-300 h-full flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow transition-colors duration-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold inline-flex items-center transition-colors duration-300"
        >
          View on GitHub
          <svg
            className="w-4 h-4 ml-1"
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
    </div>
  );
}
