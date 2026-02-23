import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "1st Prize – Paper Presentation",
      description: "E-Cube 2023 & 2024 – National Level Technical Event. Recognized for innovative research and excellent presentation skills in a competitive national platform.",
      category: "Achievement",
      year: "2023 – 2024",
      link: "YOUR_GOOGLE_DRIVE_LINK_HERE",
    },
    {
      id: 2,
      title: "Java Programming Specialization",
      description: "NPTEL Certification covering advanced programming concepts, data structures, algorithms, and object-oriented design principles for enterprise applications.",
      category: "Technical Skills",
      year: "2023",
      link: "YOUR_GOOGLE_DRIVE_LINK_HERE",
    },
    {
      id: 3,
      title: "SQL & Database Certification",
      description: "HackerRank Advanced SQL Certification demonstrating expertise in complex query optimization, database design, and data manipulation techniques.",
      category: "Database",
      year: "2024",
      link: "YOUR_GOOGLE_DRIVE_LINK_HERE",
    },
    {
      id: 4,
      title: "React.js Developer Certification",
      description: "Professional React.js certification covering component architecture, state management, hooks, and modern frontend development best practices.",
      category: "Frontend",
      year: "2024",
      link: "YOUR_GOOGLE_DRIVE_LINK_HERE",
    },
    {
      id: 5,
      title: "Full Stack Development Program",
      description: "Comprehensive workshop covering Azure Cloud infrastructure, AI/ML fundamentals, hackathon experience, and end-to-end application development.",
      category: "Full Stack",
      year: "2023 – 2024",
      link: "YOUR_GOOGLE_DRIVE_LINK_HERE",
    },
  ];

  return (
    <section id="certifications" className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications & <span className="text-red-600">Achievements</span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            transition={{ duration: 0.8 }}
          />
          <motion.p 
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Recognitions that reflect technical growth and continuous learning.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-red-600/40 pl-6 md:pl-10 space-y-12">

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Red Timeline Dot */}
              <motion.div 
                className="absolute -left-[11px] md:-left-[13px] top-3 w-5 h-5 bg-red-600 rounded-full border-4 border-black"
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.2 }}
              />

              {/* Card */}
              <motion.div 
                className="bg-[#111] p-6 md:p-8 rounded-xl border border-red-600/20 cursor-pointer"
                whileHover={{ 
                  y: -8, 
                  borderColor: 'rgb(220, 38, 38)',
                  boxShadow: '0 20px 40px rgba(220, 38, 38, 0.2)'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <motion.span 
                  className="text-sm text-red-500 font-semibold tracking-wide"
                  whileHover={{ color: '#fca5a5' }}
                  transition={{ duration: 0.2 }}
                >
                  {cert.year}
                </motion.span>

                <motion.h3 
                  className="text-xl md:text-2xl font-semibold text-white mt-2"
                  whileHover={{ color: '#dc2626' }}
                  transition={{ duration: 0.2 }}
                >
                  {cert.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-400 mt-3 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {cert.description}
                </motion.p>

                {/* View Certificate Link */}
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-red-500 font-medium"
                  whileHover={{ x: 5, color: '#ef4444' }}
                  transition={{ duration: 0.2 }}
                >
                  View Certificate →
                </motion.a>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}