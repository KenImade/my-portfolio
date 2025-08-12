import React from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../data/projectsData.json';

const RecentProjects: React.FC = () => {
  return (
    // TODO: will later make this dynamic by fetching recent data from firebase
    // implementation: try and get data from firebase if error revert to projects data json file console log if error
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">A glimpse of my recent work in data analytics and backend development</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            {
                projectsData.map((project, index) => (
                    <Link to={project.link} key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                        </div>
                    </Link>
                ))
            }
        </div>

        <div className="text-center">
            <Link
            to="/projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
                View All Projects
            </Link>
        </div>
        </div>
    </section>
  )
}

export default RecentProjects