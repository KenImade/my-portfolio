import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    article?: {
        publishedTime?: string;
        modifiedTime?: string;
        author?: string;
        section?: string;
        tags?: string[];
    };
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = "Kenneth Imade - Software Engineer | Data Analytics & Backend Development",
    description = "Software Engineer specializing in data analytics and backend development. Passionate about building scalable solutions and learning new technologies.",
    keywords = "Kenneth Imade, Software Engineer, Data Analytics, Data Engineering, Backend Development, Python, JavaScript, React, Node.js, Docker, PostgreSQL, Developer, Portfolio",
    image = "https://kennethimade.dev/images/profile_picture.jpeg",
    url = "https://kennethimade.dev/",
    type = "website",
    article
}) => {
    const fullTitle = title.includes('Kenneth Imade') ? title : `${title} | Kenneth Imade`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Kenneth Imade Portfolio" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:creator" content="@kenneth1made" />

            {/* Article specific meta tags */}
            {article && (
                <>
                    <meta property="article:published_time" content={article.publishedTime} />
                    <meta property="article:modified_time" content={article.modifiedTime} />
                    <meta property="article:author" content={article.author || "Kenneth Imade"} />
                    <meta property="article:section" content={article.section} />
                    {article.tags?.map((tag, index) => (
                        <meta key={index} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* JSON-LD for specific pages */}
            {type === 'article' && article && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": title,
                        "description": description,
                        "image": image,
                        "author": {
                            "@type": "Person",
                            "name": article.author || "Kenneth Imade",
                            "url": "https://kennethimade.dev/"
                        },
                        "publisher": {
                            "@type": "Person",
                            "name": "Kenneth Imade",
                            "url": "https://kennethimade.dev/"
                        },
                        "datePublished": article.publishedTime,
                        "dateModified": article.modifiedTime || article.publishedTime,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": url
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
}

export default SEOHead;