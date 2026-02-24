import { motion } from "framer-motion";
import { useState } from "react";

export default function Certifications() {

  const [showAll, setShowAll] = useState(false);
  
  const certifications = [
    {
      id: 1,
      title: "1st Prize – National Level Paper Presentation (E-Cube)",
      description: "Secured 1st Prize in E-Cube 2023–2024 for outstanding research innovation and technical presentation skills.",
      category: "Paper Presentation",
      year: "2023–2024",
      link: "https://drive.google.com/file/d/1ZRJ3TXyWyC8XNRxaFyQjooltDfc_iKl1/view?usp=sharing",
    },
    {
     id: 2,
  title: "NPTEL Certification – Programming in Java",
  description: "Completed a 12-week NPTEL course on Programming in Java with 99% score, gaining strong knowledge in OOP, data structures, algorithms, and enterprise-level application development.",
  category: "Certification",
  year: "2025",
      link: "https://drive.google.com/file/d/1SrOCmu2sdu82zHdbw1VZEGM2sANA2GUf/view?usp=sharing",
    },
    {
      id: 3,
  title: "HackerRank Certification – SQL (Basic)",
  description: "Successfully cleared the HackerRank SQL (Basic) skill certification test, demonstrating strong knowledge in database queries, joins, filtering, and data manipulation.",
  category: "Certification",
  year: "2025",
      link: "https://drive.google.com/file/d/1uNo782eXkPHysU8bY98AZilh9KxXHhZj/view?usp=sharing",
    },
    {
      id: 4,
  title: "Coursera Project Certificate – Web Development in React.js",
  description: "Completed a hands-on React.js project on Coursera, building a functional web application using components, hooks, state management, and modern frontend best practices.",
  category: "Certification",
  year: "2025",
      link: "https://drive.google.com/file/d/1gXVRLpuNP6JEZ3KTIWBeYjq0LQ2jEDNo/view?usp=sharing",
    },
    {
      id: 5,
  title: "Presidio Launchpad Workshop – Full Stack & Cloud Development",
  description: "Successfully completed the Presidio Launchpad Workshop, gaining hands-on experience in database design, backend connectivity, frontend & backend development, and cloud deployment.",
  category: "Workshop",
  year: "2025",
      link: "https://drive.google.com/file/d/1qTx98zog0ctZC5Gu4oBCl0AM_TfzsAaW/view?usp=sharing",
    },
    {
     id: 6,
  title: "SAMHITA’25 – Hackathon Participation (MIT, Anna University)",
  description: "Participated in the SAMHITA’25 Hackathon conducted by the Department of IT, Anna University (MIT Campus), collaborating on innovative problem-solving and technical development.",
  category: "Hackathon",
  year: "2025",
      link: "https://drive.google.com/file/d/13pO66AwjMTR94R-W6EILWgLD6sTs1Fas/view?usp=sharing",
    },
    {
      id: 7,
  title: "PROF. KRS Innovation Challenge – Participation",
  description: "Participated in the PROF. KRS Innovation Challenge conducted by the Innovation & Incubation Centre, showcasing innovative ideas and problem-solving skills.",
  category: "Innovation Challenge",
  year: "2024",
      link: "https://drive.google.com/file/d/18DCG9-wfPFqSyi_0bSM3dJ7Fd5WAngKh/view?usp=sharing",
    },
     {
      id: 8,
  title: "Coursera Project Certificate – Concepts in SQL",
  description: "Completed a hands-on SQL project on Coursera, gaining practical experience in writing queries, joins, filtering, and database operations.",
  category: "Certification",
  year: "2025",
      link: "https://drive.google.com/file/d/14MXRYNqJTIQfk52Jnnhqt_pDo0k3FFKZ/view?usp=sharing",
    },
     {
      id: 9,
  title: "Infosys Springboard – Java Programming: Introduction",
  description: "Successfully completed the Java Programming: Introduction course on Infosys Springboard, building a strong foundation in core Java concepts, syntax, and object-oriented programming principles.",
  category: "Certification",
  year: "2025",
      link: "https://drive.google.com/file/d/1_h1U1MSVOBb6Qzv0hNvtBh5q1Pg_LjyB/view?usp=sharing",
    },
     {
      id: 10,
  title: "III Prize – E-Cube Paper Presentation",
  description: "Secured 3rd Prize in E-Cube Paper Presentation (2024–2025) for demonstrating strong research analysis and effective technical presentation skills.",
  category: "Achievement",
  year: "2024–2025",
      link: "https://drive.google.com/file/d/1-kWlDD3BbIHPkmNU9ZsZ7V6sDnu-BV65/view?usp=sharing",
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

        {(showAll ? certifications : certifications.slice(0, 5)).map((cert, index) => (
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

      {/* View More Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 border border-red-600 text-red-500 rounded-full hover:bg-red-600 hover:text-white transition duration-300"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>

    </div>
  </section>
);
}