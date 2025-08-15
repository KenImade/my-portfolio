import React, { useState } from 'react'
import blogArticles from '../data/blogArticles.json';
import FeaturedPost from '../components/FeaturedPost';
import BlogCard from '../components/BlogCard';
import SubscribeCard from '../components/SubscribeCard';


const Blog: React.FC = () => {
    const featuredPost = blogArticles.find((project) => project.featured)

    const categories = [
        'All',
        'Data Engineering',
        'Backend Development',
        'Data Analytics',
        'DevOps',
        'Frontend Development',
        'Career'
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts =
        selectedCategory === 'All' ? blogArticles
            : blogArticles.filter((post) => post.category === selectedCategory);

    return (
        <div className='min-h-screen py-12'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>My Blog</h1>
                    <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                        Sharing my learning journey, technical insights, and experiences as a developer
                        in data analytics and backend development
                    </p>

                    {featuredPost && (
                        <FeaturedPost
                            id={featuredPost.id}
                            title={featuredPost.title}
                            category={featuredPost.category}
                            excerpt={featuredPost.excerpt}
                            date={featuredPost.date}
                            readTime={featuredPost.readTime}
                        />
                    )}

                    <div className='mb-8'>
                        <div className='flex flex-wrap gap-3 justify-center'>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-blue-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {filteredPosts
                            .filter((post) => !post.featured)
                            .map((post, index) => (
                                <BlogCard
                                    key={index}
                                    id={post.id}
                                    title={post.title}
                                    icon={post.icon}
                                    excerpt={post.excerpt}
                                    category={post.category}
                                    tags={post.tags}
                                    date={post.date}
                                    readTime={post.readTime}
                                />
                            ))}
                    </div>

                </div>

                <SubscribeCard />
            </div>
        </div>
    )
}

export default Blog