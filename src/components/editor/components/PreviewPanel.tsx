import React from 'react'
import type { FormData } from '../Editor';
import { Eye } from 'lucide-react';
import ArticleHeaderPreview from './ArticleHeaderPreview';
import ContentPreview from './ContentPreview';

interface ReviewPanelProps {
    formData: FormData;
    showPreview: boolean;
}

const PreviewPanel: React.FC<ReviewPanelProps> = ({ formData, showPreview }) => {

    if (!showPreview) return null;
    return (
        <div className='space-y-6'>
            <div className='bg-blue-200 dark:bg-gray-800 rounded-xl shadow-lg p-6'>
                <h2 className='text-xl font-semibild text-gray-900 dark:text-white mb-6 flex items-center space-x-2'>
                    <Eye className='h-5 w-5' />
                    <span>Live Preview</span>
                </h2>

                <ArticleHeaderPreview formData={formData} />
                <ContentPreview formData={formData} />
            </div>


        </div>
    )
}

export default PreviewPanel