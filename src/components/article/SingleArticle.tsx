import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ArticleHeader from './components/ArticleHeader';
import ArticleContent from './components/ArticleContent';
import ArticleNav from './components/ArticleNav';
import ArticleSidebar from './components/ArticleSidebar';
import ShareButton from '../ShareButton';
import Loading from '../Loading';

import { articlesService } from '../../services/articlesService';
import type { Article } from '../../services/articlesService';
import NotFoundPage from '../../pages/NotFoundPage';

import SEOHead from '../SEOHead';


const SingleArticle: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [articles, setArticles] = useState<Article[] | null>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            const fetched = await articlesService.fetchAll();
            setArticles(fetched);
            setLoading(false);
        };
        fetchArticles();
    }, [id])

    const allArticles = articles?.filter(a => !a.isDraft) ?? [];
    const currentIndex = allArticles.findIndex(a => a.id === id);
    const article = allArticles[currentIndex] || null;
    const previousPost = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
    const nextPost = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

    if (loading) return <Loading />;
    if (!article) {
        return <NotFoundPage />
    }

    const getHeadings = (markdown: string) => {
        const regex = /^##\s+(.*)$/gm;
        const matches = Array.from(markdown.matchAll(regex));
        return matches.map(match => ({
            text: match[1],
            id: match[1].toLowerCase().replace(/\s+/g, '-')
        }));
    };

    const headings = getHeadings(article.content);

    return (
        <div className='min-h-screen py-12'>
            <SEOHead
                type='article'
                title={article.title}
                description={article.excerpt || article.content.slice(0, 160)}
                url={`https://kennethimade.dev/blog/${article.id}`}
                article={{
                    publishedTime: article.date,
                    modifiedTime: article.date,
                    author: "Kenneth Imade",
                    section: article.category,
                    tags: article.tags
                }}
            />
            <div className='max-w-6xl mx-auto px-6 flex gap-8'>
                <article className='flex-1 max-w-4xl'>

                    <Link
                        to="/blog"
                        className='flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-8 transition-colors duration-200'
                    >
                        <ArrowLeft className='h-4 w-4' />
                        <span>Back to Blog</span>
                    </Link>

                    <ArticleHeader
                        title={article.title}
                        icon={article.icon}
                        category={article.category}
                        date={article.date}
                        readTime={article.readTime}
                        tags={article.tags}
                    />

                    <ArticleContent content={article.content} />

                    <ArticleNav
                        previousPost={previousPost ? { id: previousPost.id, title: previousPost.title, isDraft: previousPost.isDraft } : null}
                        nextPost={nextPost ? { id: nextPost.id, title: nextPost.title, isDraft: nextPost.isDraft } : null}
                    />

                </article>

                <ShareButton url={window.location.href} />

                <aside className='hidden lg:block w-64 sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto'>
                    <ArticleSidebar headings={headings} />
                </aside>


            </div>

        </div>
    )
}

export default SingleArticle;