import React, { useState } from 'react';
import { Copy, Check, Twitter, Facebook, Linkedin } from 'lucide-react';

interface ShareButtonProps {
    url: string;
    title?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after 2s
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title || '')}`,
    };

    return (
        <div className="fixed right-4 bottom-16 flex flex-col space-y-2 z-50">
            <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 text-white shadow-lg transition-transform duration-200 hover:scale-110"
            >
                <Twitter size={20} />
            </a>
            <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 text-white shadow-lg transition-transform duration-200 hover:scale-110"
            >
                <Facebook size={20} />
            </a>
            <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-800 rounded-full hover:bg-blue-900 text-white shadow-lg transition-transform duration-200 hover:scale-110"
            >
                <Linkedin size={20} />
            </a>
            <button
                onClick={copyToClipboard}
                className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 text-white shadow-lg transition-transform duration-200 hover:scale-110 flex items-center justify-center"
            >
                {copied ? <Check size={20} className="animate-bounce" /> : <Copy size={20} />}
            </button>
        </div>
    );
};

export default ShareButton;
