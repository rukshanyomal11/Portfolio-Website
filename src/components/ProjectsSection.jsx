import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "🔷 Web Conference Management System",
      description:
        "The Web Conference Management System is a digital platform designed to streamline the organization and participation in conferences. Participants can register online, receive QR codes for check-in, and manage their session preferences through a personalized dashboard.",
      technologies: ["HTML", "JavaScript", "PHP", "MySQL", "CSS"],
      githubLink:
        "https://github.com/rukshanyomal11/Web-Based-Conference-Day-Management-System.git",
      image: "/assets/images/conference.png",
    },
    {
      title: "🩸 Blood Donation Management System",
      description:
        "BloodUnity is a web-based app that simplifies and manages blood donations for hospitals and donors. It lets administrators manage staff, stock levels, and track donors, while donors can book appointments and view history.",
      technologies: ["HTML", "PHP", "JavaScript", "CSS", "MySQL"],
      githubLink:
        "https://github.com/rukshanyomal11/BloodUnity-Blood-Donation-Management-System.git",
      image: "/assets/images/blood.jpg",
    },
    {
      title: "💼 Portfolio Website",
      description:
        "A modern responsive personal portfolio built using React and Tailwind CSS. It highlights my skills, projects, and experience with smooth animations and a user-friendly layout.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubLink:
        "https://github.com/rukshanyomal11/React-Portfolio-Website-with-HCI-Principles.git",
      image: "/assets/images/portfolio.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
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
