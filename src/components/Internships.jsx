import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

export default function Internships() {
  const internships = [
    {
  company: "Finari Services Private Limited",
  role: "Full Stack Developer",
  duration: "2026 • 1 Month • Hybrid",
  certificate: "",
  description:
    "Worked on Full Stack Development concepts with exposure to ERP frameworks, Multi-Tenant Architecture, AWS fundamentals, and Version Control practices. Gained valuable insights into business workflows and the role of technology in supporting business operations.",
},
        {
      company: "Evolve Solution",
      role: "Full Stack Developer",
      duration: "2026 • 3 Month • On-site ",
      certificate: "https://drive.google.com/file/d/1IpuXCPxEldPnV6vIs0SRX6PH3tRteeqI/view?usp=sharing",
      description:
        "Engaged in full-stack web development, building scalable applications with modern frameworks and robust backend solutions.",
    },
     {
      company: "InetZ Technologies",
      role: "Java Programmer",
      duration: "2025 • 1 Month • On-site",
      certificate: "https://drive.google.com/file/d/1P-kf5md4T8R6jZq82UscxpUT2oroNwQY/view?usp=sharing",
      description:
        "Strongly Focused on OOP concepts with hands-on projects, developing real-world applications and enhancing programming proficiency.",
    },
    {
      company: "Cognify Technologies",
      role: "Frontend Developer",
      duration: "2025 • 1 Month • Remote",
      certificate: "https://drive.google.com/file/d/1hYpVbYva6xVlA3QNz4ENutvEktaYte5c/view?usp=sharing",
      description:
        "Worked on interactive UI designs, integrating JavaScript functionalities with REST APIs for seamless user experience.",
    },
    {
      company: "Code Bind Technologies",
      role: "Web Developer",
      duration: "2024 • 1 Month • On-site",
      certificate: "https://drive.google.com/file/d/1WVhkzap0KyITl-NsyVPmFY2QoxSBEQEB/view?usp=sharing",
      description:
        "Gained foundational experience in HTML, CSS, and MySQL, contributing to responsive web pages and basic database management.",
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

  {intern.certificate && (
  <a
    href={intern.certificate}
    target="_blank"
    rel="noopener noreferrer"
    title="View Certificate"
  >
    <FaExternalLinkAlt
      className="text-red-600 flex-shrink-0 cursor-pointer hover:scale-110 transition-all duration-200"
    />
  </a>
)}
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