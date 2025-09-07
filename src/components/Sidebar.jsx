import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import defaultImage from "/img/default.jpg"; // Import the default image

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = [
    { name: "خانه", path: "/" },
    { name: "مهارت‌ها", path: "/skills" },
    { name: "نمونه کارها", path: "/projects" },
    { name: "درباره من", path: "/about" },
    { name: "تماس با من", path: "/contact" },
  ];

  // بروزرسانی وضعیت موبایل هنگام Resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* دکمه باز و بسته کردن سایدبار برای موبایل */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      )}

      {/* سایدبار */}
      <motion.nav
      className={`bg-gradient-to-r from-blue-400 to-blue-800 text-gray shadow-md z-40 transform transition-transform duration-1000 ease-in-out fade-in-out
    ${isMobile ? (isOpen ? 'fixed top-0 right-0 h-full w-80 translate-x-0' : 'fixed top-0 right-0 h-full w-80 translate-x-full') : 'relative block w-80 min-h-screen py-8'}
  `}
  initial={false}
  animate={{ x: isMobile ? (isOpen ? 0 : "100%") : 0 }}
  transition={{ type: "tween", duration: 0.3 }}
  dir="rtl"
>
        {/* لوگو */}
        <div className="mb-8 mt-16 md:mt-0 px-4">
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={defaultImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
            />
          </motion.div>
          <motion.h1
            className="text-4xl text-white text-center font-bold mb-6 animate-wiggle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            فرزاد پولادی
          </motion.h1>
        </div>

        {/* لینک‌ها */}
        <ul className="flex flex-col gap-6 px-4">
          {links.map((link) => (
            <motion.li
              key={link.path}
              whileHover={{ scale: 1.05, x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 px-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white font-semibold shadow-lg border-l-4 border-blue-400"
                      : "text-white hover:bg-blue-600 hover:text-white"
                  }`
                }
                onClick={() => {
                  if (isMobile) setIsOpen(false);
                }}
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        {/* Footer در سایدبار */}
        <motion.div
          className="mt-auto mb-8 px-4 text-center text-sm text-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>طراحی و توسعه توسط فرزاد پولادی &copy; 2023</p>
        </motion.div>
      </motion.nav>

      {/* Overlay برای موبایل */}
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
}

export default Sidebar;
