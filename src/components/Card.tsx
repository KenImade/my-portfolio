import React from 'react'
import IconMapper from './IconMapper';
import { ExternalLink, Github } from 'lucide-react';


interface CardProps {
    title: string;
    category: string;
    longDescription: string;
    technologies: string[];
    icon: string;
    image: string;
    features: string[];
    challenges: string;
    github: string;
    demo: string;
    status: string;
}

const Card: React.FC<CardProps> = (
    {
        title, category, longDescription, technologies, icon, image, features, challenges,
        github, demo, status
    }
) => {

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
            <div className='md:flex'>
                <div className='md:w-1/3'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-64 md:h-full object-cover'
                    />
                </div>
                <div className='md:w-2/3 p-8'>
                    <div className='flex items-start justify-between mb-4'>
                        <div className='flex items-center space-x-4'>
                            <div className='bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg'>
                                <IconMapper name={icon} size={32} color='white' />
                            </div>
                            <div>
                                <h2 className='text-2xl font-fold text-gray-900 dark:text-white'>{title}</h2>
                                <div className='flex items-center space-x-3 mt-2'>
                                    <span className='inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
                                        {category}
                                    </span>
                                    <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${status === 'Completed'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {status}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex space-x-3'>
                            <a
                                href={github}
                                className='p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200'
                                title='View Source'
                                target='_blank'
                            >
                                <Github className='h-6 w-6' />
                            </a>
                            <a
                                href={demo}
                                className='p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200'
                                title='Live Demo'
                                target='_blank'
                            >
                                <ExternalLink className='h-6 w-6' />
                            </a>
                        </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{longDescription}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className='font-semibold text-gray-900 dark:text-white mb-3'>Key Features</h3>
                            <ul className='space-y-1'>
                                {features.slice(0, 4).map((feature, index) => (
                                    <li key={index} className='flex items-start space-x-2'>
                                        <div className='bg-blue-600 rounded-full w-1.5 h-1.5 mt-2 flex-shrink-0'></div>
                                        <span className='text-gray-600 dark:text-gray-300 text-sm'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenges & Learning</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{challenges}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card