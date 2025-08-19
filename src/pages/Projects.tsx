import React from 'react'
import projectsData from '../data/projectsData.json';
import learningProjectsData from '../data/learningProjectsData.json'
import Card from '../components/Card';
import SEOHead from '../components/SEOHead';

const Projects: React.FC = () => {
    return (
        <div className='min-h-screen py-12'>
            <SEOHead
                title="Projects"
                description="Explore projects by Kenneth Imade in data analytics and backend development."
                url="https://kennethimade.dev/projects"
            />
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Projects</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A collection of projects showcasing my skills in data analytics, backend development, and problem-solving
                    </p>
                </div>

                <div className='space-y-12 mb-16'>
                    {
                        projectsData.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                category={project.category}
                                longDescription={project.longDescription}
                                technologies={project.technologies}
                                icon={project.icon}
                                image={project.image}
                                features={project.features}
                                challenges={project.challenges}
                                github={project.github}
                                demo={project.demo}
                                status={project.status}
                            />
                        ))
                    }
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8'>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>Current Learning & Exploration</h2>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {learningProjectsData.map((project, index) => (
                            <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                                    <span className={`whitespace-nowrap text-xs font-medium px-2 py-1 rounded-full ${project.status === 'Learning'
                                        ? 'bg-purple-100 text-purple-800'
                                        : project.status === 'In Progress'
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-200 px-2 py-1 rounded text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects