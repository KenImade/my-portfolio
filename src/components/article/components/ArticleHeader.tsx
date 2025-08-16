import React from 'react'
import IconMapper from '../../IconMapper'
import { Calendar, Clock } from 'lucide-react';

interface ArticleHeaderProps {
    title: string;
    icon: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ icon, category, title, date, readTime, tags }) => {
    return (
        <header className='mb-8'>
            <div className='flex items-center space-x-3 mb-4'>
                <div className='bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg'>
                    <IconMapper name={icon} />
                </div>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {category}
                </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
            <div className='flex items-center space-x-6 text-gray-500 dark:text-gray-400'>
                <div className='flex items-center space-x-2'>
                    <Calendar className='h-4 w-4' />
                    <span>{date}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <Clock className='h-4 w-4' />
                    <span>{readTime}</span>
                </div>
            </div>
            <div className='flex flex-wrap gap-2 mt-4'>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className='bg-blue-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm'
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </header>
    )
}

export default ArticleHeader