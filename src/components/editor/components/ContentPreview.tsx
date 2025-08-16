import React from 'react'
import type { FormData } from '../Editor';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ContentPreviewProps {
    formData: FormData;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ formData }) => {
    return (
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
                    prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-gray-900 prose-pre:text-gray-100
                    prose-hr:border-gray-300 dark:prose-hr:border-gray-600 prose-hr:my-8"
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        const codeString = String(children).replace(/\n$/, '')

                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={oneDark}
                                langugae={match[1]}
                                PreTag="div"
                                className="rounded-lg"
                                {...props}
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {formData.content || '*Start writing to see preview...*'}
            </ReactMarkdown>
        </div>
    )
}

export default ContentPreview