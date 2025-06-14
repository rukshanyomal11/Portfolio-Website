export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Contact Methods</h2>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-600">Email: your.email@example.com</p>
              <p className="text-gray-600">LinkedIn: linkedin.com/in/yourprofile</p>
              <p className="text-gray-600">GitHub: github.com/yourusername</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}