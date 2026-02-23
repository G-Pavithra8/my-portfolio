import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black border-t border-primary/30 py-6 md:py-8 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          {/* Left Side */}
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lightGray text-sm md:text-base flex items-center justify-center md:justify-start gap-2 flex-wrap">
              Made with
              <FaHeart className="text-primary animate-pulse text-sm" />
              by Pavithra Ganapathy
            </p>
            <p className="text-xs md:text-sm text-lightGray/60">© {currentYear} All rights reserved.</p>
          </motion.div>

          {/* Center */}
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-primary font-semibold text-sm md:text-base">
              Portfolio v1.0
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="text-center md:text-right"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lightGray/60 text-xs md:text-sm">
              Designed & Built by
            </p>
            <p className="text-white font-semibold hover:text-primary transition cursor-pointer text-sm md:text-base">
              Pavithra Ganapathy
            </p>
          </motion.div>
        </div>

        {/* Scroll to Top */}
        <motion.div
          className="flex justify-center mt-6 md:mt-8 pt-6 md:pt-8 border-t border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary hover:text-white transition flex items-center gap-2 text-sm md:text-base font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Top</span>
            <span>↑</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
