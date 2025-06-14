export default function ProjectCard({ title, description, technologies, githubLink, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 h-full flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 font-semibold inline-flex items-center"
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
