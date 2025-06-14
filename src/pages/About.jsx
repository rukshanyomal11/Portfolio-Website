export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
          <p className="text-gray-600">Your educational background goes here.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git'].map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Career Aspirations</h2>
          <p className="text-gray-600">Your career goals and aspirations go here.</p>
        </div>
      </div>
    </div>
  );
}