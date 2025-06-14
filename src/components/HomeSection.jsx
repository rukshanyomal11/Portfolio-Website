export default function HomeSection() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Blue curved line on left - hidden on mobile */}
          <div className="hidden md:block absolute left-20 top-0 h-full">
            <svg width="4" height="100%" className="text-blue-500">
              <path d="M2 0 Q2 200 2 400 Q2 600 2 800" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Blue curved elements on right - adjusted for mobile */}
          <div className="absolute right-0 top-1/4 w-48 h-48 md:w-96 md:h-96">
            <svg width="100%" height="100%" viewBox="0 0 400 400" className="text-blue-400">
              <circle cx="300" cy="100" r="80" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="350" cy="350" r="120" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl md:ml-24 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 md:mb-6">
              Hello,
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-2">
              I'm Yomal Rukshan
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 italic mb-6 md:mb-8">
              Full-Stack Developer
            </h3>

            <div className="max-w-lg mx-auto md:mx-0">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                Welcome to my portfolio website! I'm a passionate Full-Stack Developer skilled in building dynamic, high-performance web applications from front to back.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                I specialize in crafting seamless user experiences and robust backend solutions, ensuring every layer of the application works flawlessly together.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                With expertise in modern technologies such as React, Tailwind CSS, JavaScript, Node.js, Express, and MongoDB/MySQL, I turn creative ideas into scalable digital products.
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative">
              {/* Profile image placeholder - responsive sizing */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
                <img
                  src="/assets/images/profile.jpeg"
                  alt="Yomal Rukshan - Full-Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder when image fails to load */}
                <div className="hidden w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium">Yomal Rukshan</p>
                    <p className="text-xs opacity-90">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Blue accent circle behind - responsive sizing */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-20 h-20 md:w-32 md:h-32 bg-blue-500 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Below the Home Section */}
      <div className="w-full flex justify-center mt-12">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block text-sm md:text-base"
        >
          View My Work
        </a>
      </div>
    </>
  );
}
