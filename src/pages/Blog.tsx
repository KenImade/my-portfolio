import React, { useEffect, useState } from 'react'
import FeaturedPost from '../components/FeaturedPost';
import BlogCard from '../components/BlogCard';
import SubscribeCard from '../components/SubscribeCard';

import { articlesService } from '../services/articlesService';
import type { Article } from '../services/articlesService';
import Loading from '../components/Loading';
import SEOHead from '../components/SEOHead';


const Blog: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            const allArticles = await articlesService.fetchAll();
            const publishedArticles = allArticles.filter(article => !article.isDraft);
            setArticles(publishedArticles);
            setLoading(false);
        };
        fetchArticles();
    }, []);

    const featuredPost = articles.find((article) => article.featured && !article.isDraft)

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
        selectedCategory === 'All' ? articles
            : articles.filter((post) => post.category === selectedCategory);

    if (loading) return <Loading />

    return (
        <div className='min-h-screen py-12'>
            <SEOHead
                title='blog'
                description='Explore articles by Kenneth Imade in data analytics and backend development.'
                url='https://kennethimade.dev/blog'
            />
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>My Blog</h1>
                    <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6'>
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
                            .filter((post) => !post.isDraft)
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
                                    isDraft={false}
                                    buttonLabel='Read'
                                    link={`/blog/${post.id}`}
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