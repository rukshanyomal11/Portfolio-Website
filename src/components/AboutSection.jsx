import { motion } from 'framer-motion';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center transition-colors duration-300"
      id="about"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center tracking-tight transition-colors duration-300"
        >
          About Me
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        >
          {/* Education Section */}
          <motion.div
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-xl dark:shadow-gray-900/20 p-8 border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 flex items-center transition-colors duration-300">
              🎓 Education
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-4 text-base leading-relaxed transition-colors duration-300">
              <li>
                <strong>Information Technology (Undergraduate)</strong><br />
                Institute of Technology University of Moratuwa<br />
                Moratuwa, Sri Lanka<br /><br />
                
                <span className="text-gray-600 dark:text-gray-400">Followed courses: Web Development, Database Systems, UI/UX Design</span>
              </li>
            </ul>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-xl dark:shadow-gray-900/20 p-8 border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 flex items-center transition-colors duration-300">
              🛠️ Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS',
                'Git', 'Node.js', 'Vite', 'MongoDB', 'Spring Boot', "Express"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Career Aspirations */}
          <motion.div
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-xl dark:shadow-gray-900/20 p-8 md:col-span-2 border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 flex items-center transition-colors duration-300">
              🚀 Career Aspirations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-4 transition-colors duration-300">
              I’m a passionate Full-Stack Developer dedicated to designing and building innovative, user-centric web applications with robust and scalable backend and seamless frontend experiences across all devices. My goal is to join a dynamic, forward-thinking team where I can leverage modern frameworks like React and backend technologies such as Node.js, Express, and databases to create maintainable, efficient, and accessible full-stack solutions. I’m committed to lifelong learning, staying updated with the latest industry trends and best practices, and collaborating with diverse teams to deliver impactful digital products. Looking ahead, I aspire to lead projects, mentor emerging developers, and drive the future of web development with creativity, technical excellence, and a strong focus on end-to-end delivery.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
