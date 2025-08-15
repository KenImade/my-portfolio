import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ArticleNavProps {
    previousPost: { id: string; title: string } | null;
    nextPost: { id: string; title: string } | null;
}

const ArticleNav: React.FC<ArticleNavProps> = ({ previousPost, nextPost }) => {
    return (
        <nav className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700'>
            <div className='flex justify-between items-center'>
                {previousPost ? (
                    <Link
                        to={`/blog/${previousPost.id}`}
                        className="flex items-center space-x-3 text-left group dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                        <div>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>Previous</p>
                            <p className='font-medium text-gray-900 dark:text-white'>{previousPost.title}</p>
                        </div>
                    </Link>
                ) : (<div></div>)}


                {nextPost ? (
                    <Link
                        to={`/blog/${nextPost.id}`}
                        className="flex items-center space-x-3 text-left group dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                        <div>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>Next</p>
                            <p className='font-medium text-gray-900 dark:text-white'>{nextPost.title}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    </Link>
                ) : (<div></div>)}
            </div>
        </nav>
    )
}

export default ArticleNav