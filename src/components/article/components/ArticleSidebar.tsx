import React, { useEffect, useState } from 'react';

interface Heading {
    text: string;
    id: string;
}

interface ArticleSidebarProps {
    headings: Heading[];
}

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({ headings }) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            headings.forEach(heading => {
                const el = document.getElementById(heading.id);
                if (el && el.getBoundingClientRect().top <= 100) current = heading.id;
            });
            setActiveId(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    return (
        <aside className="hidden lg:block w-48 ml-8 sticky top-24 self-start">
            <nav className="space-y-2">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate whitespace-nowrap overflow-hidden ${activeId === heading.id ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                            }`}
                        title={heading.text}
                    >
                        {heading.text}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default ArticleSidebar;
