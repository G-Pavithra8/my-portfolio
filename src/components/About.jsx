import { motion } from "framer-motion";
import profileImg from "../assets/photo.png";

export default function About() {
  // Animation variant for text reveal
  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Greeting */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            
          >
            <motion.span className="text-red-600 inline-block">
              About Myself,
            </motion.span>
          </motion.h2>

          {/* Simple Animated Red Line */}
          <motion.div 
            className="w-16 md:w-20 h-1 bg-red-600 rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            transition={{ duration: 0.7 }}
          />

          {/* About Me Text */}
          <motion.div className="space-y-6">
            <motion.p
              className="text-gray-300 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I’m <span className="text-red-600 font-semibold">Pavithra</span>, a passionate <span className="text-red-600 font-semibold">Final Year Student</span> at <span className="text-red-600 font-semibold">Meenakshi Sundararajan Engineering College</span>. I specialize in building <strong>scalable, user-centric web applications</strong> that deliver real impact.
            </motion.p>

            <motion.p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-red-600 font-semibold">Current CGPA: 8.9</span> I’m focused on <strong>Full Stack Development</strong>, with expertise in <strong>React.js, Core Java,</strong> and modern backend technologies. I’m passionate about <strong>clean code, performance optimization,</strong> and delivering solutions that matter.
            </motion.p>

            <motion.p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I am deeply curious about <strong>emerging technologies like AI-driven systems</strong> and exploring the intersection of innovation and practical solutions. Always eager to learn, grow, and contribute to impactful projects!!
            </motion.p>

            <motion.p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Apart from coding, I’m also passionate about <span className="text-red-600 font-semibold">Radio Jockeying (RJ)</span> — I love connecting with people, sharing stories, and exploring the world of creative expression behind the mic! 
            </motion.p>
          </motion.div>
        </motion.div>

      <motion.div
  className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] 
  rounded-full overflow-hidden 
  border-4 border-red-600 
  shadow-[0_0_30px_rgba(220,38,38,0.6)] 
  bg-black flex items-center justify-center"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
>
  <img
    src={profileImg}
    alt="Profile"
    className="w-full h-full object-cover object-[50%_35%] scale-110"
  />
</motion.div>


      </div>
    </section>
  );
}