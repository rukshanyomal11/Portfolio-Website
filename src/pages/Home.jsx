import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/assets/images/profile.jpg" 
              alt="Profile" 
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm <span className="text-blue-500">Your Name</span></h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-6">Frontend Developer</h2>
            <p className="text-gray-600 mb-8">
              Welcome to my portfolio website. I create beautiful, responsive web applications with great user experiences.
            </p>
            <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
              View My Work
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}