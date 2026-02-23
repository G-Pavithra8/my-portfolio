import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const ease = [0.25, 0.1, 0.25, 1]; // professional easing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_3f7rpzm",
        "template_ng4wfmu",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "uwsMn6wMArp42xse0"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((error) => {
        console.error("Email Error:", error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-[#111] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s <span className="text-red-600">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8"
          >
            <h3 className="text-3xl font-semibold text-white">
              Reach Me Through
            </h3>

            <div className="flex gap-6 justify-center lg:justify-start">
              {[
                { icon: FaEnvelope, link: "mailto:pavithraganapathy04@gmail.com" },
                { icon: FaLinkedin, link: "https://linkedin.com/in/pavithra-ganapathy" },
                { icon: FaGithub, link: "https://github.com/G-Pavithra8" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 flex items-center justify-center 
                               bg-red-600/10 text-red-600 
                               rounded-full border border-red-600/30
                               hover:bg-red-600 hover:text-white
                               transition-all duration-300 shadow-md"
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                );
              })}
            </div>

            <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
  viewport={{ once: true }}
  className="text-gray-400 max-w-md"
>
  Got something exciting to discuss? 
  <br />
  <span className="text-red-500">
    Drop a message — let’s make it happen.
  </span>
</motion.p>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-lg p-10 rounded-3xl border border-red-600/20 space-y-6 shadow-xl"
          >

            {/* Stagger children animation */}
            {["name", "email", "message"].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease }}
                viewport={{ once: true }}
              >
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={
                      field === "name"
                        ? "Your Name"
                        : field === "email"
                        ? "Your Email"
                        : ""
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-[#111] border border-red-600/20 rounded-lg text-white focus:border-red-600 outline-none transition"
                  />
                ) : (
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-[#111] border border-red-600/20 rounded-lg text-white focus:border-red-600 outline-none transition resize-none"
                  />
                )}
              </motion.div>
            ))}

           <motion.button
  type="submit"
  disabled={loading}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.6 }}
  whileHover={{
    scale: 1.04,
    boxShadow: "0px 0px 25px rgba(220,38,38,0.6)",
  }}
  whileTap={{ scale: 0.97 }}
  className="relative w-full py-4 rounded-lg font-semibold text-lg 
             bg-gradient-to-r from-red-700 via-red-600 to-red-700 
             text-white overflow-hidden transition-all duration-300"
>
  {/* Shine Animation */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                   translate-x-[-100%] hover:translate-x-[100%] 
                   transition-transform duration-700 ease-in-out" />

  {/* Button Content */}
  <span className="relative flex items-center justify-center gap-2">

    {loading ? (
      <>
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        Sending...
      </>
    ) : submitted ? (
      "✓ Message Sent"
    ) : (
      "Send Message"
    )}

  </span>
</motion.button>

           {submitted && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mt-6 p-4 rounded-xl border border-red-600/40 
               bg-red-600/10 backdrop-blur-sm text-center"
  >
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-red-400 font-medium tracking-wide"
    >
       Thank you!
      <br />
      I’ll connect with you shortly.
    </motion.p>
  </motion.div>
)}      </motion.form>
        </div>
      </div>
    </section>
  );
}