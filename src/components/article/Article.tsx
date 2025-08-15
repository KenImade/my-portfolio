import React from 'react';

import { Link, useParams } from 'react-router-dom';
import blogArticles from '../../data/blogArticles.json';
import { ArrowLeft } from 'lucide-react';
import ArticleHeader from './components/ArticleHeader';
import ArticleContent from './components/ArticleContent';
import ArticleNav from './components/ArticleNav';
import ArticleSidebar from './components/ArticleSidebar';
import ShareButton from '../ShareButton';


const Article: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const article = blogArticles.find((item) => item.id === id)


    if (!article) {
        // TODO: change this to custom 404 page
        return <div className='text-center py-12'>Article not found</div>
    }

    const currentIndex = blogArticles.findIndex((post) => post.id === article.id);
    const previousPost = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
    const nextPost = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

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
                        previousPost={previousPost ? { id: previousPost.id, title: previousPost.title } : null}
                        nextPost={nextPost ? { id: nextPost.id, title: nextPost.title } : null}
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

export default Article