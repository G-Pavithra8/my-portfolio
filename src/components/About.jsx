import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-red-600">Me</span>
          </motion.h2>

          {/* Simple Animated Red Line */}
          <motion.div 
            className="w-16 md:w-20 h-1 bg-red-600 rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            transition={{ duration: 0.7 }}
          />

          <motion.p 
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Full Stack Developer from <span className="text-red-600 font-semibold">Meenakshi Sundararajan Engineering College</span>. I specialize in designing and deploying scalable web applications with modern frontend frameworks and robust backend systems, focusing on user-centric solutions.
          </motion.p>

          <motion.p 
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Expertise in Core Java and React.js with a passion for clean code, performance optimization, and mentoring. I'm committed to building applications that solve real problems and deliver measurable impact.
          </motion.p>

          <motion.p 
            className="text-gray-400 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Deeply interested in emerging technologies like AI-driven systems and explainable AI. My goal is to bridge innovative technology with practical business solutions.
          </motion.p>
        </motion.div>

        {/* Right Side - Professional Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 gap-4 md:gap-6"
        >
          <motion.div
            className="bg-[#111] p-6 md:p-8 rounded-xl border border-red-600/20 hover:border-red-600/50 transition-colors cursor-pointer"
            whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(220, 38, 38, 0.15)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <motion.p 
              className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold"
              whileHover={{ color: '#dc2626' }}
              transition={{ duration: 0.2 }}
            >
              Experience
            </motion.p>
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mt-3"
              whileHover={{ scale: 1.08, color: '#dc2626' }}
              transition={{ duration: 0.3 }}
            >
              2+
            </motion.h3>
            <p className="text-gray-500 text-sm mt-1">Years</p>
          </motion.div>

          <motion.div
            className="bg-[#111] p-6 md:p-8 rounded-xl border border-red-600/20 hover:border-red-600/50 transition-colors cursor-pointer"
            whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(220, 38, 38, 0.15)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <motion.p 
              className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold"
              whileHover={{ color: '#dc2626' }}
              transition={{ duration: 0.2 }}
            >
              Internships
            </motion.p>
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mt-3"
              whileHover={{ scale: 1.08, color: '#dc2626' }}
              transition={{ duration: 0.3 }}
            >
              3+
            </motion.h3>
            <p className="text-gray-500 text-sm mt-1">Completed</p>
          </motion.div>

          <motion.div
            className="bg-[#111] p-6 md:p-8 rounded-xl border border-red-600/20 hover:border-red-600/50 transition-colors cursor-pointer"
            whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(220, 38, 38, 0.15)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <motion.p 
              className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold"
              whileHover={{ color: '#dc2626' }}
              transition={{ duration: 0.2 }}
            >
              Projects
            </motion.p>
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mt-3"
              whileHover={{ scale: 1.08, color: '#dc2626' }}
              transition={{ duration: 0.3 }}
            >
              5+
            </motion.h3>
            <p className="text-gray-500 text-sm mt-1">Completed</p>
          </motion.div>

          <motion.div
            className="bg-[#111] p-6 md:p-8 rounded-xl border border-red-600/20 hover:border-red-600/50 transition-colors cursor-pointer"
            whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(220, 38, 38, 0.15)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <motion.p 
              className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold"
              whileHover={{ color: '#dc2626' }}
              transition={{ duration: 0.2 }}
            >
              Tech Stack
            </motion.p>
            <motion.h3 
              className="text-base md:text-lg font-semibold text-white mt-3"
              whileHover={{ scale: 1.05, color: '#dc2626' }}
              transition={{ duration: 0.3 }}
            >
              React · Node · Flask · AI
            </motion.h3>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
