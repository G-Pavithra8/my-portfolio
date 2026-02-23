import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Internships() {
  const internships = [
    {
      company: "Code Bind Technologies",
      role: "Web Development Intern",
      duration: "2024 • 1 Month • On-site",
      description:
        "Gained foundational experience in HTML, CSS, and MySQL, contributing to responsive web pages and basic database management.",
    },
    {
      company: "Cognify Technologies",
      role: "Frontend Development Intern",
      duration: "2025 • 1 Month • Remote",
      description:
        "Worked on interactive UI designs, integrating JavaScript functionalities with REST APIs for seamless user experience.",
    },
    {
      company: "InetZ Technologies",
      role: "Java Programmer Intern",
      duration: "2025 • 1 Month • On-site",
      description:
        "Strongly Focused on OOP concepts with hands-on projects, developing real-world applications and enhancing programming proficiency.",
    },
    {
      company: "Evolve Solution (Currently Ongoing)",
      role: "Full Stack Web Development Intern",
      duration: "2026 • 3 Month • On-site ",
      description:
        "Engaged in full-stack web development, building scalable applications with modern frameworks and robust backend solutions.",
    },
  ];

  return (
    <section
      id="internships"
      className="min-h-screen bg-[#111] py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="text-red-600">Internships</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Real-world experience building scalable and responsive applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-red-600">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-6 md:ml-8"
            >
              {/* Dot */}
              <span className="absolute -left-3.5 md:-left-3 flex items-center justify-center w-6 h-6 bg-red-600 rounded-full ring-8 ring-[#111]"></span>

              {/* Card */}
              <div className="bg-black p-5 md:p-6 rounded-lg shadow-lg hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-start md:items-center mb-2 gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {intern.role}
                  </h3>
                  <FaBriefcase className="text-red-600 flex-shrink-0" />
                </div>

                <p className="text-red-600 font-medium text-sm md:text-base">
                  {intern.company}
                </p>

                <div className="flex items-center text-gray-400 text-xs md:text-sm mt-2 mb-4 gap-2">
                  <FaCalendarAlt className="text-red-600 flex-shrink-0" />
                  <span>{intern.duration}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {intern.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}