import React from 'react';
import { motion } from "framer-motion";

const portfolioData = {
  "about": {
    "bio": "سلام! من فرزاد پولادی هستم، یک توسعه‌دهنده پرشور جاوا اسکریپت با تخصص در ساخت وب‌اپلیکیشن‌های واکنش‌گرا و کارآمد. با چندین سال تجربه در توسعه فرانت‌اند و بک‌اند، به ارائه راه‌حل‌های نوآورانه و با کیفیت بالا متعهد هستم. علاقه من به کدنویسی، مرا به سمت یادگیری مداوم و به‌روز ماندن با آخرین فناوری‌ها و بهترین روش‌های توسعه سوق می‌دهد."
  },
  "skills": [
    {"name": "جاوا اسکریپت (ES6+)", "level": 90},
    {"name": "React.js", "level": 85},
    {"name": "Node.js & Express.js", "level": 80},
    {"name": "HTML5 & CSS3", "level": 95},
    {"name": "Git & GitHub", "level": 75},
    {"name": "RESTful APIs", "level": 80},
    {"name": "پایگاه داده (MongoDB, PostgreSQL)", "level": 70}
  ]
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function About() {
  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden" dir="rtl">
      <motion.section
        id="about"
        className="container mx-auto py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2, z: 20, transition: { duration: 0.3 } }}
        style={{ perspective: 1000 }} /* Add perspective for 3D effect */
      >
        <motion.h2
          className="w-full text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.1, rotateZ: -2, transition: { duration: 0.3 } }}
        >
          درباره من
        </motion.h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-center">
          {portfolioData.about.bio}
        </p>
      </motion.section>

      <motion.section
        id="skills"
        className="container mx-auto py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2, z: 20, transition: { duration: 0.3 } }}
        style={{ perspective: 1000 }} /* Add perspective for 3D effect */
      >
        <motion.h2
          className="w-full text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.1, rotateZ: -2, transition: { duration: 0.3 } }}
        >
          مهارت‌ها
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {portfolioData.skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg mb-2 text-right">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-left">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default About; 