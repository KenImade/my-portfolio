import React from 'react'
import IconMapper from './IconMapper'
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id?: string;
  icon: string;
  category: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  isDraft: boolean;
  buttonLabel: string;
  link?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, icon, category, title, excerpt, tags, date, readTime, isDraft, buttonLabel, link }) => {

  const isBlog = link?.includes("/blog/") ?? false;

  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
    >
      <div className='p-6 flex flex-col justify-between h-full'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
            <IconMapper name={icon} />
          </div>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 whitespace-nowrap dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
          {!isBlog && (<span
            className={`px-3 py-1 rounded-full text-sm font-medium ${isDraft
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}
          >
            {isDraft ? 'Draft' : 'Live'}
          </span>)}
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{title}</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{excerpt}</p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {tags
            .slice(0, 3)
            .map((tag, index) => (
              <span
                key={index}
                className="bg-blue-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))
          }
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-600">
          <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className='flex items-center space-x-1'>
              <Calendar className='h-4 w-4' />
              <span>{date}</span>
            </div>
            <div className='flex items-center space-x-1'>
              <Clock className='h-4 w-4' />
              <span>{readTime}</span>
            </div>
            <Link
              to={link || `/blog/${id}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center space-x-1"
            >
              <span>{buttonLabel}</span>
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </div>

    </article>
  )
}

export default BlogCard