import React, { useState } from 'react';
import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface ArticleContentProps {
    content: string;
}

export type CodeProps = {
    node?: unknown;
    inline?: boolean;
    className?: string;
    children?: ReactNode;
};

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = async (code: string, id: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(id);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
                    prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-gray-900 prose-pre:text-gray-100
                    prose-hr:border-gray-300 dark:prose-hr:border-gray-600 prose-hr:my-8"
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h2: ({ children }) => {
                        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
                        return <h2 id={id} className='scroll-mt-20'>{children}</h2>;
                    },
                    h3: ({ children }) => {
                        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
                        return <h3 id={id} className='scroll-mt-20'>{children}</h3>;
                    },
                    code: ({ inline, className, children, ...props }: CodeProps) => {
                        const match = /language-(\w+)/.exec(className || '');
                        const codeString = String(children || '').replace(/\n$/, '');
                        const codeId = `code-${Math.random().toString(36).substr(2, 9)}`;

                        if (!inline && match) {
                            return (
                                <div className="relative group w-full overflow-x-auto rounded-lg">
                                    <button
                                        onClick={() => copyToClipboard(codeString, codeId)}
                                        className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                                        title="Copy code"
                                    >
                                        {copiedCode === codeId ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                    <SyntaxHighlighter
                                        style={oneDark as { [key: string]: React.CSSProperties }}
                                        language={match[1]}
                                        PreTag="div"
                                        className="rounded-lg"
                                        {...props}
                                    >
                                        {codeString}
                                    </SyntaxHighlighter>
                                </div>
                            );
                        }

                        return (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {content.replace(/\\n/g, '\n').replace(/^# .+\n\n/, '')}
            </ReactMarkdown>
        </div>
    );
};

export default ArticleContent;
