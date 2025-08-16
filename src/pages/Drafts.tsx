import React, { useEffect, useState } from 'react';
// import articlesData from '../data/blogArticles.json';
import BlogCard from '../components/BlogCard';
import AddArticleButton from '../components/AddArticleButton';
import Loading from '../components/Loading';

import { articlesService } from '../services/articlesService';
import type { Article } from '../services/articlesService';
import NotFoundPage from './NotFoundPage';


const Drafts: React.FC = () => {

    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            const allArticles = await articlesService.fetchAll();
            setArticles(allArticles);
            setLoading(false);
        };
        fetchArticles();
    }, []);

    if (loading) return <Loading />

    if (!articles) return <NotFoundPage />

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Draft Articles
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                        Manage your articles and drafts
                    </p>

                    <AddArticleButton />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {articles.map((article) => (
                            <BlogCard
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                icon={article.icon}
                                category={article.category}
                                tags={article.tags}
                                excerpt={article.excerpt}
                                readTime={article.readTime}
                                date={article.date}
                                isDraft={article.isDraft}
                                buttonLabel="Edit"
                                link={`/editor/${article.id}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Drafts;