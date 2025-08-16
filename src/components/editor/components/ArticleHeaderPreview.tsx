import React from 'react'
import type { FormData } from '../Editor';
import IconMapper from '../../IconMapper';
import { Calendar, Clock } from 'lucide-react';
import { calculateReadTime } from '../../../utils/calculateReadTime';

interface ArticleHeaderPreviewProps {
    formData: FormData;
}

const ArticleHeaderPreview: React.FC<ArticleHeaderPreviewProps> = ({ formData }) => {
    return (
        <div className='mb-8 pb-6 border-b border-gray-200 dark:border-gray-600'>
            <div className='flex items-center space-x-3 mb-4'>
                <div className='bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg'>
                    <IconMapper name={formData.icon} />
                </div>
                {formData.category && (
                    <span className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium'>
                        {formData.category}
                    </span>
                )}
                {formData.featured && (
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                    </span>
                )}
            </div>

            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                {formData.title || 'Article Title'}
            </h1>

            <div className='flex items-center space-x-6 text-gray-500 dark:text-gray-400 mb-4'>
                <div className='flex items-center space-x-2'>
                    <Calendar className='h-4 w-4' />
                    <span>{formData.date || new Date().toLocaleDateString()}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <Clock className='h-4 w-4' />
                    <span>{calculateReadTime(formData.content)}</span>
                </div>
            </div>

            {formData.tags && (
                <div className='flex flex-wrap gap-2'>
                    {formData.tags.split(',').map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            )}

        </div>
    )
}

export default ArticleHeaderPreview