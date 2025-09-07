import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'پروژه نمونه ۱',
    description: 'توضیحات کوتاهی در مورد پروژه اول. این پروژه یک مثال از...',
    image: '/img/default.jpg',
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: 2,
    title: 'پروژه نمونه ۲',
    description: 'توضیحات کوتاهی در مورد پروژه دوم. این پروژه یک مثال از...',
    image: '/img/default.jpg',
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: 3,
    title: 'پروژه نمونه ۳',
    description: 'توضیحات کوتاهی در مورد پروژه سوم. این پروژه یک مثال از...',
    image: '/img/default.jpg',
    githubLink: '#',
    demoLink: '#',
  },
];

function Projects() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-500 after:rounded-full">
        پروژه‌ها
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map(project => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 text-base mb-6">{project.description}</p>
              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gray-700 hover:bg-gray-800 transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 