export default function HomeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        
        {/* Blue curved line on left */}
        <div className="absolute left-20 top-0 h-full">
          <svg width="4" height="100%" className="text-blue-500">
            <path d="M2 0 Q2 200 2 400 Q2 600 2 800" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        {/* Blue curved elements on right */}
        <div className="absolute right-0 top-1/4 w-96 h-96">
          <svg width="100%" height="100%" viewBox="0 0 400 400" className="text-blue-400">
            <circle cx="300" cy="100" r="80" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="350" cy="350" r="120" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 flex items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl ml-24">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
            Hello,
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
            I'm Yomal Rukshan
          </h2>
          <h3 className="text-xl md:text-2xl font-medium text-gray-600 italic mb-8">
            Full-Stack Developer
          </h3>
          
          <div className="max-w-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to my portfolio website! I'm a passionate Full-Stack Developer skilled in building dynamic, high-performance web applications from front to back.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I specialize in crafting seamless user experiences and robust backend solutions, ensuring every layer of the application works flawlessly together.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With expertise in modern technologies such as React, Tailwind CSS, JavaScript, Node.js, Express, and MongoDB/MySQL, I turn creative ideas into scalable digital products.
            </p>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            {/* Profile image placeholder */}
            <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
              <img
                src="/assets/images/profile.jpeg"
                alt="Yomal Rukshan - Full-Stack Developer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
            </div>
            
            {/* Blue accent circle behind */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
