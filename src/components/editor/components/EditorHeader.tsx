import React from 'react'
import type { Article } from '../../../services/articlesService'
import { Eye, EyeOff, Save } from 'lucide-react';

interface EditorHeaderProps {
    article: Article | null;
    showPreview: boolean;
    setShowPreview: (value: boolean) => void;
    onCancel: () => void;
    handleSaveAsDraft: (publish: string) => void;
    isSaving: boolean;
}

const EditorHeader: React.FC<EditorHeaderProps> = ({
    article, showPreview, setShowPreview, onCancel, handleSaveAsDraft, isSaving
}) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            {/* Left side */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {article ? 'Edit Article' : 'Write New Article'}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    {article ? 'Edit' : 'Create'} and preview your article with live markdown rendering
                </p>
            </div>

            {/* Right side (buttons) */}
            <div className="flex flex-wrap items-center gap-3">
                <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex items-center gap-2 px-4 py-2 border text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                    {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span>{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
                </button>

                <button
                    onClick={onCancel}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                >
                    Cancel
                </button>

                <button
                    onClick={() => handleSaveAsDraft('draft')}
                    disabled={isSaving}
                    className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    <Save className="h-4 w-4" />
                    <span>Save as Draft</span>
                </button>

                <button
                    onClick={() => handleSaveAsDraft('publish')}
                    disabled={isSaving}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    {isSaving ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            <span>Saving...</span>
                        </>
                    ) : (
                        <>
                            <Save className="h-4 w-4" />
                            <span>Publish Article</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default EditorHeader;