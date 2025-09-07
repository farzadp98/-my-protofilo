import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom styles for Swiper navigation and pagination
import './ImageSlider.css'; // We will create this file for custom styles

const images = [
  'https://images.unsplash.com/photo-1506748687220-b119d02d6bce?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1470770841027-adfd87ac4f5d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const ImageSlider = () => {
  const slideVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const imageVariants = {
    initial: { scale: 1.1, rotate: 2 },
    animate: { scale: 1, rotate: 0 },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight">Discover Our Collection</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        grabCursor={true}
        className="mySwiper rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="relative w-full h-96 flex items-center justify-center overflow-hidden"
            >
              <motion.img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover absolute top-0 left-0"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end p-8 text-white">
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="text-5xl font-extrabold drop-shadow-lg leading-tight"
                >
                  Journey Through Captivating Landscapes {index + 1}
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider; 