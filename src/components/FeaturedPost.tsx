import React from 'react'
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedPostProps {
  id: string,
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ category, title, excerpt, date, readTime, id }) => {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-white'>
      <div className='flex items-center space-x-2 mb-4'>
        <span className='bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium'>
          Featured Post
        </span>
        <span className='bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium'>
          {category}
        </span>
      </div>
      <h2 className='text-3xl font-bold mb-4'>{title}</h2>
      <p className='text-xl mb-6 text-blue-100'>{excerpt}</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-6 text-blue-100'>
          <div className='flex items-center space-x-2'>
            <Calendar className='h-4 w-4' />
            <span className='text-sm'>
              {new Date(date).toLocaleDateString()}
            </span>
          </div>
          <div className='flex items-center space-x-2'>
            <Clock className='h-4 w-4' />
            <span className='text-sm'>
              {readTime}
            </span>
          </div>
          <Link
            to={id}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
          >
            <span>Read More</span>
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost