import React from "react";
import bookstoreImage from '../assets/bookstore.jpeg'
import weatherImage from '../assets/weather.jpeg'
import FurniroImage from '../assets/furniture.jpeg'

const projects = [
  {
    id: 1,
    name: "Online Book Store Website",
    technologies: "MERN Stack",
    image: bookstoreImage,
    github: "https://github.com/Aashish-Kushwaha13/BookFusion-MERN-Stack-website",
    live: "https://book-fusion-mern-stack-website.vercel.app"
  },
  {
    id: 2,
    name: "Weather Forecasting Website",
    technologies: "HTML5 CSS3 JavaScript",
    image: weatherImage,
    github: "https://github.com/Aashish-Kushwaha13/Weather-app",
    live: "http://weather-app-sable-iota-43.vercel.app",
  },
  {
    id: 3,
    name: "Furniture Shopping Website",
    technologies: "React.JS",
    image: FurniroImage,
    github: "https://github.com/Aashish-Kushwaha13/Furniro-react.js-app",
    live: "http://furniro-react-js-app.vercel.app",
  },
]
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project =>(
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 " />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          ))}
        </div> <br /> and many more...
      </div>
    </div>
  );
};

export default Projects;
