import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiFlask } from "react-icons/si";

export default function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "Flask", icon: SiFlask },
        { name: "Node.js", icon: FaNodeJs },
        
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql } ,
        { name: "MongoDB", icon: SiMongodb },
        
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            Technical <span className="text-red-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-5"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Organized skill set categorized based on development layers and tools.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
              
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-red-600 mb-10 text-center md:text-left">
                {category.title}
              </h3>

              {/* Centered Grid */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl">

                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      className="
                        h-[140px]
                        flex
                        flex-col
                        items-center
                        justify-center
                        bg-[#111]
                        border
                        border-red-600/30
                        rounded-xl
                        transition
                        duration-300
                        hover:border-red-600
                        hover:shadow-lg
                        hover:shadow-red-600/20
                      "
                    >
                      <div className="text-4xl text-red-600 mb-4">
                        <skill.icon />
                      </div>
                      <span className="text-white text-sm md:text-base font-medium text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}