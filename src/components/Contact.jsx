import React from 'react';
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-400 pb-2 inline-block">همکاری کنیم ؟؟</h2>
      <section id="contact-links" className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 mb-4">برای ارتباط با من می‌توانید از طریق لینک‌های زیر اقدام کنید:</p>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4">
          <li><a href="mailto:fpooladi98@gmail.com" className="button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md no-underline">ایمیل</a></li>
          <li><a href="https://github.com/farzadp98" target="_blank" rel="noopener noreferrer" className="button bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded-md no-underline">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/farzad-pooladi-62a980233/" target="_blank" rel="noopener noreferrer" className="button bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded-md no-underline">LinkedIn</a></li>
        </ul>
      </section>
      {/* Optional Contact Form */}
      
      <section id="contact-form" className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">ارسال پیام</h3>
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
      </section>
      
    </div>
  );
}

export default Contact; 