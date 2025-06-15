import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // EmailJS configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = 'your_service_id';
  const EMAILJS_TEMPLATE_ID = 'your_template_id';
  const EMAILJS_PUBLIC_KEY = 'your_public_key';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('KCg_lMYNpw4yx4Mry');

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_4sa6swb',
        'template_4sr8d8c',
        templateParams
      );

      console.log('Email sent successfully:', result);
      
      // Success handling
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'rukshanyomal11@gmail.com',
      link: 'mailto:rukshanyomal11@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'linkedin.com/in/yomal-rukshan-a24635305',
      link: 'https://linkedin.com/in/yomal-rukshan-a24635305',
      color: 'from-blue-400 to-blue-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'github.com/rukshanyomal11',
      link: 'https://github.com/rukshanyomal11',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+94 713412404',
      link: 'tel:+94713412404',
      color: 'from-blue-300 to-blue-400',
    },
  ];

  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether it’s a project or just a chat, feel free to connect. Let’s make something awesome together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-blue-100 shadow-2xl transition-all duration-300 hover:shadow-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message sent successfully! I'll respond soon.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-blue-100 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Let’s Talk</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "Keen to explore new opportunities, brainstorm ideas, or geek out over tech? Let’s chat—drop me a message anytime!"
              </p>
              <div className="space-y-6">
                {contactMethods.map((method, i) => (
                  <a
                    key={i}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-white rounded-xl hover:bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold group-hover:text-blue-500 transition-colors duration-200">
                        {method.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{method.value}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}