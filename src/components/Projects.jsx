import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'PathFinder',
      techStack: 'React.js, Flask, MongoDB',
      description: 'Developed a college-search and career-guidance platform suitable only for website view. Implemented secure login and authentication using MongoDB for user data, college information, and student help desk. Features include dynamic filtering, responsive UI, and a student help desk for guidance.',
      github: ['https://github.com/G-Pavithra8/PathFinder', 'https://github.com/G-Pavithra8/Pathfinder-Backend'],
      demo: 'https://path-finder-five-ivory.vercel.app/',
      image: require('../assets/project 1.png'),
      imageHeight: { mobile: '180px', desktop: '240px' },
    },
    {
      id: 2,
      title: 'FairCred – Staff Insights Platform',
      techStack: 'React + Vite, Flask, MySQL, ML',
      description: 'Developed a web-focused performance transparency platform, empowering managers with AI-driven staff insights and interactive visual feedback. Integrated SHAP explainability to deliver clear and interpretable performance scoring for both staff and management.',
      github: ['https://github.com/G-Pavithra8/staff-salary-frontend', 'https://github.com/G-Pavithra8/staff-salary-backend'],
      demo: 'https://staff-salary-frontend.vercel.app/',
      image: require('../assets/project 2.png'),
      imageHeight: { mobile: '180px', desktop: '240px' },
    },
    {
      id: 3,
      title: 'RainPredict',
      techStack: 'React.js, Flask, MongoDB',
      description: 'Created a smart decision-support platform for farmers, delivering accurate rainfall forecasts and crop recommendations. Delivered real-time rainfall insights and automated suggestions tailored to regional crop suitability.',
      github: ['https://github.com/G-Pavithra8/Rainfall-predict-frontend', 'https://github.com/G-Pavithra8/Rainfall-predict-backend'],
      demo: 'https://rainfall-predict-frontend.vercel.app/',
      image: require('../assets/project 3.png'),
      imageHeight: { mobile: '180px', desktop: '240px' },
    },
    {
  id: 4,
  title: 'Crazy Gaming Platform',
  techStack: 'React.js, Tailwind CSS',
  description: 'Built a fully responsive browser-based gaming platform featuring classic mini-games like Tic-Tac-Toe, Snake Game, Memory Game, Guess the Number, and Rock Paper Scissors. Designed with a mobile-first approach, smooth animations, and real-time score tracking to deliver a seamless and engaging experience across all devices.',
  github: [
    'https://github.com/G-Pavithra8/Gaming-website'
  ],
  demo: 'https://letsplay-game.netlify.app/',
  image: require('../assets/project 4.png'),
  imageHeight: { mobile: '180px', desktop: '240px' },
},
{
  id: 5,
  title: 'Evolve Beauty Website',
  techStack: 'React.js, Tailwind CSS',
  description: 'Developed a modern desktop-focused frontend beauty website with an elegant UI. Built interactive product sections, wishlist functionality, and smooth navigation using React and Tailwind CSS. Deployed the project on Netlify for production.',
   github: [
    'https://github.com/G-Pavithra8/Beauty-Website'
  ],
  demo: 'https://beautiqo.netlify.app/',
  image: require('../assets/project 5.png'),
  imageHeight: { mobile: '180px', desktop: '240px' },
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
        damping: 20,
      } 
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-darkBg py-12 md:py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-16 md:w-20 bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Projects</h2>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-darkCard rounded-lg overflow-hidden border border-primary/20 hover:border-primary transition-all group h-full flex flex-col"
              whileHover={{ 
                translateY: -12, 
                boxShadow: '0 30px 60px rgba(220, 38, 38, 0.3)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Header with Image */}
              <div 
                className="overflow-hidden relative"
                style={{
                  height: window.innerWidth < 768 ? project.imageHeight.mobile : project.imageHeight.desktop
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                {/* Title */}
                <motion.h3 
                  className="text-lg md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  {project.title}
                </motion.h3>

                {/* Tech Stack */}
                <motion.p 
                  className="text-sm md:text-base text-primary font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: false }}
                >
                  {project.techStack}
                </motion.p>

                {/* Description */}
                <motion.p 
                  className="text-lightGray text-sm md:text-base mb-6 flex-1 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  {project.description}
                </motion.p>

                {/* Links */}
                <motion.div 
                  className="flex gap-3 pt-4 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-primary/20 text-primary py-2 rounded hover:bg-primary/30 transition font-semibold text-xs md:text-sm"
                    whileHover={{ scale: 1.08, backgroundColor: 'rgba(220, 38, 38, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-sm md:text-base" /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-primary text-white py-2 rounded hover:bg-red-700 transition font-semibold text-xs md:text-sm"
                    whileHover={{ scale: 1.08, backgroundColor: '#991b1b' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-sm md:text-base" /> Live
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
