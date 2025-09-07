import React from "react";
import { motion } from "framer-motion";
import Avatar from "./Avatar"; // Import the new Avatar component
 

const portfolioData = {
  "hero": {
    "name": "فرزاد پولادی",
    "title": "توسعه‌دهنده وب و طراح UI/UX",
    "description": "ساختن وب‌اپلیکیشن‌های مدرن و کاربرپسند با شور و اشتیاق",
    "ctaText": "مشاهده پروژه‌ها",
    "ctaLink": "#projects",
    "backgroundGradient": "from-blue-500 to-red-500"
  },
  "about": {
    "photo": "/public/img/default.jpg",
    "bio": "من فرزاد پولادی هستم، متخصص جاوااسکریپت و توسعه‌دهنده وب با علاقه‌مندی به طراحی وب‌اپلیکیشن‌های مدرن و کاربرپسند. تجربه کار با React، Node.js و TailwindCSS را دارم و عاشق حل مسائل پیچیده و ساختن پروژه‌های باکیفیت هستم.",
    "socials": {
      "github": "https://github.com/farzad",
      "linkedin": "https://linkedin.com/in/farzad",
      "twitter": "https://twitter.com/farzad"
    }
  },
  "skills": [
    {"name": "HTML", "level": 90},
    {"name": "CSS", "level": 85},
    {"name": "JavaScript", "level": 80},
    {"name": "React", "level": 75},

    {"name": "TailwindCSS", "level": 80}
  ],
  "projects": [
    {"title": "پروژه ۱", "description": "توضیح کوتاه درباره پروژه ۱", "image": "/public/img/default.jpg", "link": "#"},
    {"title": "پروژه ۲", "description": "توضیح کوتاه درباره پروژه ۲", "image": "/public/img/default.jpg", "link": "#"},
    {"title": "پروژه ۳", "description": "توضیح کوتاه درباره پروژه ۳", "image": "/public/img/default.jpg", "link": "#"}
  ],
  "testimonials": [
    {"name": "مشتری ۱", "feedback": "کار با فرزاد بسیار حرف‌ه‌ای و لذت‌بخش بود.", "photo": "/public/img/default.jpg"},
    {"name": "مشتری ۲", "feedback": "پروژه در زمان کوتاه و با کیفیت عالی تحویل داده شد.", "photo": "/public/img/default.jpg"}
  ],
  "contact": {
    "email": "fpooladi98@gmail.com",
    "phone": "+989175671409",
    "address": "شیراز ، فارس"
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Home() {
  return (
    <div className="bg-gray-50 text-gray-900" dir="rtl">
 

      {/* --- بخش معرفی --- */}
      <motion.section
        id="intro"
        className="container mx-auto flex flex-col items-center justify-center text-center py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: 2, z: 20, transition: { duration: 0.3 } }}
        style={{ perspective: 1000 }} /* Add perspective for 3D effect */
      >
        <motion.div
          className={`w-40 h-40 rounded-full bg-gradient-to-r ${portfolioData.hero.backgroundGradient} flex items-center justify-center text-white text-5xl font-bold mb-6 border-4 border-blue-400 shadow-lg mx-auto`}
          whileHover={{ scale: 1.1, rotate: -10 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
        >
          {portfolioData.hero.name.substring(0, 2)}
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
        >
          {portfolioData.hero.name} - {portfolioData.hero.title}
        </motion.h1>
        <p className="text-lg sm:text-xl leading-relaxed max-w-xl mb-6">
          {portfolioData.hero.description}
        </p>
        <motion.a
          href={portfolioData.hero.ctaLink}
          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition"
          whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
        >
          {portfolioData.hero.ctaText}
        </motion.a>
      </motion.section>

      {/* --- بخش مهارت‌ها --- */}
      <motion.section
        id="skills"
        className="container mx-auto py-20 px-8 border-2 border-transparent rounded-lg shadow-lg transition-all duration-300 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2, z: 20, transition: { duration: 0.3 }, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.6)" }}
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
          ابزارهای من
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {portfolioData.skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.2)" }}
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

      {/* --- بخش نمونه کارها --- */}
      <motion.section
        id="portfolio"
        className="container mx-auto py-20 px-8 border-2 border-transparent rounded-lg shadow-lg transition-all duration-300 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: -2, rotateY: 2, z: 20, transition: { duration: 0.3 }, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.6)" }}
        style={{ perspective: 1000 }} /* Add perspective for 3D effect */
      >
        <motion.h2
          className="w-full text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.1, rotateZ: 2, transition: { duration: 0.3 } }}
        >
          دنیای خلاقیت من
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateZ: 1, boxShadow: "0px 12px 20px rgba(0,0,0,0.2)" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-bold text-lg mb-2 text-right dark:text-white">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2 text-right dark:text-gray-300">
                {project.description}
              </p>
              <motion.a
                href={project.link}
                className="text-blue-500 hover:underline font-medium float-right dark:text-blue-400"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                مشاهده پروژه
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- بخش درباره من --- */}
      <motion.section
        id="about"
        className="container mx-auto py-20 px-8 border-2 border-transparent rounded-lg shadow-lg transition-all duration-300 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2, z: 20, transition: { duration: 0.3 }, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.6)" }}
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
          داستان یک افسانه
        </motion.h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <Avatar
            src={portfolioData.about.photo}
            alt={portfolioData.hero.name}
            size="large"
            className="shadow-lg"
          />
          <div className="text-center sm:text-center">
            <p className="text-gray-700 leading-relaxed mb-4">
              سلام! من فرزاد پولادی هستم. از همون بچگی عاشق این بودم که دنیا رو با کد بسازم و داستان‌های دیجیتالی خودم رو خلق کنم. برام خیلی هیجان‌انگیزه که ایده‌ها رو تبدیل به وب‌سایت‌های کاربردی و قشنگ می‌کنم. با هر خط کدی که می‌نویسم، یه قدم به خلق یه افسانه جدید نزدیک‌تر میشم. من فقط یه برنامه‌نویس نیستم، بلکه یه داستان‌گو هستم که با شور و شوق، دنیاهای آنلاین رو می‌سازم و همیشه دنبال چالش‌های جدیدم تا بهترین‌ها رو بسازم.
            </p>
            <div className="flex justify-center sm:justify-center gap-4 mt-4">
              {portfolioData.about.socials.github && (
                <motion.a
                  href={portfolioData.about.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  whileHover={{ scale: 1.3, color: "#2b3137" }}
                >
                  <i className="fab fa-github text-3xl"></i>
                </motion.a>
              )}
              {portfolioData.about.socials.linkedin && (
                <motion.a
                  href={portfolioData.about.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  whileHover={{ scale: 1.3, color: "#0077B5" }}
                >
                  <i className="fab fa-linkedin text-3xl"></i>
                </motion.a>
              )}
              {portfolioData.about.socials.twitter && (
                <motion.a
                  href={portfolioData.about.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  whileHover={{ scale: 1.3, color: "#1DA1F2" }}
                >
                  <i className="fab fa-twitter text-3xl"></i>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- بخش Testimonials --- */}
      <motion.section
        id="testimonials"
        className="container mx-auto py-20 px-8 border-2 border-transparent rounded-lg shadow-lg transition-all duration-300 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: -2, rotateY: 2, z: 20, transition: { duration: 0.3 }, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.6)" }}
        style={{ perspective: 1000 }} /* Add perspective for 3D effect */
      >
        <motion.h2
          className="w-full text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ scale: 1.1, rotateZ: 2, transition: { duration: 0.3 } }}
        >
          رضایت شما، افتخار من
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Avatar
                src={testimonial.photo}
                alt={testimonial.name}
                size="medium"
                className="mb-4 border-4 border-blue-200"
              />
              <p className="text-gray-700 text-lg italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="font-bold text-md text-blue-600">- {testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- بخش تماس --- */}
      <motion.section
        id="contact"
        className="container mx-auto py-20 px-8 border-2 border-transparent rounded-lg shadow-lg transition-all duration-300 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2, z: 20, transition: { duration: 0.3 }, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.6)" }}
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
          همکاری کنیم؟
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05, rotateZ: 2, transition: { duration: 0.2 } }}
          >
            <i className="fas fa-envelope text-4xl text-blue-500 mb-3"></i>
            <p className="text-lg font-semibold">ایمیل</p>
            <a href={`mailto:${portfolioData.contact.email}`} className="text-blue-600 hover:underline">
              {portfolioData.contact.email}
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05, rotateZ: -2, transition: { duration: 0.2 } }}
          >
            <i className="fas fa-phone-alt text-4xl text-blue-500 mb-3"></i>
            <p className="text-lg font-semibold">تلفن</p>
            <a href={`tel:${portfolioData.contact.phone}`} className="text-blue-600 hover:underline">
              {portfolioData.contact.phone}
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05, rotateZ: 2, transition: { duration: 0.2 } }}
          >
            <i className="fas fa-map-marker-alt text-4xl text-blue-500 mb-3"></i>
            <p className="text-lg font-semibold">آدرس</p>
            <p className="text-gray-700">{portfolioData.contact.address}</p>
          </motion.div>
        </div>
        <form className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-100">
          <input
            type="text"
            placeholder="نام"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm text-right bg-gray-50"
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm text-right bg-gray-50"
          />
          <textarea
            placeholder="پیام شما"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm text-right bg-gray-50"
            rows={5}
          />
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 font-bold"
            whileHover={{ scale: 1.05, translateY: -2 }}
          >
            ارسال پیام
          </motion.button>
        </form>
      </motion.section>

      {/* --- Footer ساده --- */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 {portfolioData.hero.name}. همه حقوق محفوظ است.
      </footer>
    </div>
  );
}

export default Home;
