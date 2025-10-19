import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
     {
      title: "👗 Area51 – Clothing Website",
      description:
        "BloodUnity is a web-based system that streamlines the blood donation process by enabling hospitals to manage  donors, staff, appointments, and inventory efficiently. Donors can register, track donation history, and receive noti f  ications, while hospital staff can monitor blood stocks and manage appointments, improving operational efficiency  and patient care.",
      technologies: ["React", "Tailwind CSS", "JavaScript","Mongodb"],
      githubLink:
        "https://github.com/rukshanyomal11/Area51.git",
      image: "/assets/images/area51.png",
    },
    {
      title: "🚌 BusBooking – Ticket Booking App",
      description:
        "Developed a full-stack bus ticket booking application that allows users to view schedules, select seats in real-time,  book tickets, and receive automated confirmations, while providing admins with comprehensive tools to manage  buses, routes, and bookings, streamlining operations and enhancing customer experience across the system.",
      technologies: ["React", "Tailwind CSS", "JavaScript","Mongodb"],
      githubLink:
        "https://github.com/rukshanyomal11/BusBooking.git",
      image: "/assets/images/bus.png",
    },
   
    {
      title: "🔷 Web Conference Management System",
      description:
        "The Web Conference Management System is a digital platform designed to streamline the organization and participation in conferences. Participants can register online, receive QR codes for check-in, and manage their session preferences through a personalized dashboard.",
      technologies: ["HTML", "JavaScript", "PHP", "MySQL", "CSS"],
      githubLink:
        "https://github.com/rukshanyomal11/Web-Based-Conference-Day-Management-System.git",
      image: "/assets/images/conference.png",
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 transition-colors duration-300">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
