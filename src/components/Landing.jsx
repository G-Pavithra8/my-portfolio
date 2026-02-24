import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [
  'Crafting digital experiences with precision and passion.',
  'Transforming ideas into scalable, impactful solutions.',
  'Where creativity meets code — building the future.',
];

const TITLE = "Welcome to My Portfolio";

/* ---------------- Typewriter Component ---------------- */

function TypewriterTitle() {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(TITLE.slice(0, index + 1));
      index++;
      if (index === TITLE.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="relative text-5xl md:text-7xl font-extrabold text-center mb-6">
      <span className="text-white">
        {text.replace("Portfolio", "")}
      </span>

      {text.includes("Portfolio") && (
        <span className="text-red-600">
          {"Portfolio"}
        </span>
      )}

      {/* Blinking Cursor */}
      <span className="ml-1 text-red-600 animate-pulse">|</span>
    </h1>
  );
}

/* ---------------- Landing Component ---------------- */

export default function Landing({ onFinish }) {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % QUOTES.length);
    }, 2000);

    const splashTimer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => {
      clearInterval(quoteTimer);
      clearTimeout(splashTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >

        {/* Subtle Animated Grid Background */}
        <motion.div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{ y: [0, 50] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Light Sweep Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Typewriter Headline */}
        <TypewriterTitle />

        {/* Quotes */}
        <div className="relative h-14 md:h-16 flex items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIdx}
              className="text-lg md:text-2xl font-semibold text-red-400 px-4 text-center"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6 }}
            >
              {QUOTES[quoteIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 3 Dot Loader */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full bg-red-600"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 tracking-widest uppercase mt-3">
            Loading
          </span>
        </div>

      </motion.div>
    </AnimatePresence>
  );
}