import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPaperclip } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleDownloadCV = () => {
    // Direct download from Google Drive
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1jUt22Xgn2yFAk2sRSuu90ZeuzuHWiqc0';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Pavithra_Ganapathy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-darkBg flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Red Accent Line */}
            <motion.div
              className="h-1 w-16 md:w-20 bg-primary mb-6 md:mb-8"
              variants={itemVariants}
            />

            {/* Greeting */}
            <motion.p
              className="text-base md:text-lg text-lightGray mb-2"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>

            {/* Main Title */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-7xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h1>

            {/* Type Animation - Developer Roles */}
            <motion.div
              className="text-lg sm:text-2xl md:text-3xl text-white font-semibold mb-6 min-h-12"
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1500,
                  'frontend enthusiast',
                  1500,
                  'Technophile',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block', color: '#dc2626' }}
              />
            </motion.div>

            {/* Enthusiastic Quote */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-lightGray mb-8 leading-relaxed max-w-lg italic font-semibold"
              variants={itemVariants}
            >
              "Building amazing digital experiences, one line of code at a time."
            </motion.p>
            
            {/* Present Status */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-primary font-semibold mb-8 uppercase tracking-wider"
              variants={itemVariants}
            >
             Currently Available for Opportunities
            </motion.p>
            {/* Social Icons - Ultra Catchy */}
            <motion.div
              className="flex gap-6 md:gap-8 mb-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://linkedin.com/in/pavithra-ganapathy"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
              >
                <motion.span 
                  className="relative inline-block p-4 rounded-full bg-gradient-to-br from-primary to-red-500 text-white text-3xl md:text-4xl shadow-lg cursor-pointer"
                  animate={{ 
                    boxShadow: [
                      '0 0 10px rgba(220, 38, 38, 0.2)',
                      '0 0 20px rgba(220, 38, 38, 0.5)',
                      '0 0 10px rgba(220, 38, 38, 0.2)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  whileHover={{ 
                    rotate: 360,
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)',
                    transition: { duration: 0.6 }
                  }}
                >
                  <FaLinkedin />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="https://github.com/G-Pavithra8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
              >
                <motion.span 
                  className="relative inline-block p-4 rounded-full bg-gradient-to-br from-primary to-red-900 text-white text-3xl md:text-4xl shadow-lg cursor-pointer"
                  animate={{ 
                    boxShadow: [
                      '0 0 10px rgba(220, 38, 38, 0.2)',
                      '0 0 20px rgba(220, 38, 38, 0.5)',
                      '0 0 10px rgba(220, 38, 38, 0.2)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  whileHover={{ 
                    rotate: -360,
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)',
                    transition: { duration: 0.6 }
                  }}
                >
                  <FaGithub />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="mailto:pavithraganapathy04@gmail.com"
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
              >
                <motion.span 
                  className="relative inline-block p-4 rounded-full bg-gradient-to-br from-primary to-red-900 text-white text-3xl md:text-4xl shadow-lg cursor-pointer"
                  animate={{ 
                    boxShadow: [
                      '0 0 10px rgba(220, 38, 38, 0.2)',
                      '0 0 20px rgba(220, 38, 38, 0.5)',
                      '0 0 10px rgba(220, 38, 38, 0.2)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  whileHover={{ 
                    rotate: 360,
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)',
                    transition: { duration: 0.6 }
                  }}
                >
                  <FaEnvelope />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded font-semibold hover:bg-red-700 transition group text-sm md:text-base whitespace-nowrap cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                className="flex items-center justify-center gap-2 border-2 border-primary text-white px-6 md:px-8 py-3 md:py-4 rounded font-semibold hover:bg-primary/10 transition text-sm md:text-base whitespace-nowrap cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperclip />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div
            className="flex justify-center items-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
            
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-primary text-3xl">↓</div>
      </motion.div>
    </section>
  );
}
