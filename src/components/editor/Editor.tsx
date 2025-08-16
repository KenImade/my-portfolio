import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { articlesService } from '../../services/articlesService';
import type { Article } from '../../services/articlesService';
import EditorHeader from './components/EditorHeader';
import EditorPanel from './components/EditorPanel';

import { calculateReadTime } from '../../utils/calculateReadTime';
import PreviewPanel from './components/PreviewPanel';

export interface FormData {
    id: string;
    firebaseId?: string;
    title: string;
    icon: string;
    date: string;
    category: string;
    excerpt: string;
    tags: string; // comma-separated string for input
    isDraft: boolean;
    content: string;
    featured: boolean;
}


const Editor: React.FC = () => {
    const { id } = useParams<{ id: string }>() || null;
    const navigate = useNavigate();

    const [article, setArticle] = useState<Article | null>(null);
    const [showPreview, setShowPreview] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        id: '',
        firebaseId: undefined,
        title: '',
        date: '',
        icon: '',
        category: '',
        excerpt: '',
        tags: '',
        isDraft: true,
        content: '',
        featured: false,
    });

    const onCancel = () => {
        const confirmCancel = window.confirm(
            'Your changes will not be saved. Are you sure you want to leave?'
        );
        if (confirmCancel) {
            navigate('/drafts');
        }
    };

    const handleSaveAsDraft = async (publish: string) => {
        if (!formData.title || !formData.category || !formData.excerpt || !formData.content) {
            alert('Please fill in all required fields');
            return;
        }

        const draft: Article = {
            id: formData.id || generateId(formData.title),
            title: formData.title,
            category: formData.category,
            date: formData.date || new Date().toISOString().split('T')[0],
            readTime: calculateReadTime(formData.content),
            excerpt: formData.excerpt,
            content: formData.content,
            tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
            featured: formData.featured,
            icon: formData.icon,
            isDraft: publish === 'publish' ? false : true
        };

        try {
            setIsSaving(true);
            const saved = await articlesService.saveOrUpdate(draft);
            if (saved) {
                setFormData(prev => ({
                    ...prev,
                    id: saved.id
                }))
            }
            navigate('/drafts')
        } catch (error) {
            console.error("Error saving draft:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const generateId = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-')
            .substring(0, 50);
    }


    useEffect(() => {
        const fetchArticle = async () => {
            if (!id) return;
            const fetched = await articlesService.fetchById(id);
            setArticle(fetched);
        };
        fetchArticle();
    }, [id]);

    // Sync formData when article is fetched
    useEffect(() => {
        if (article) {
            setFormData({
                id: article.id,
                title: article.title,
                date: article.date,
                icon: article.icon,
                category: article.category,
                excerpt: article.excerpt,
                tags: article.tags.join(','), // convert array to CSV string
                isDraft: article.isDraft,
                content: article.content,
                featured: article.featured,
            });
        }
    }, [article]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const categories = [
        'Data Engineering',
        'Backend Development',
        'Data Analytics',
        'Frontend Development',
        'DevOps',
        'Career',
        'Tutorial',
    ];

    const icons = [
        'BookOpen',
        'Code2',
        'Database',
        'TrendingUp',
        'BarChart3',
        'Server',
        'Globe'
    ];

    return (
        <div className='min-h-screen py-12'>
            <div className='max-w-7xl mx-auto px-6'>
                <EditorHeader
                    article={article}
                    showPreview={showPreview}
                    setShowPreview={setShowPreview}
                    onCancel={onCancel}
                    handleSaveAsDraft={handleSaveAsDraft}
                    isSaving={isSaving}
                />

                <div className='grid lg:grid-cols-2 gap-8'>
                    <EditorPanel
                        formData={formData}
                        categories={categories}
                        icons={icons}
                        handleInputChange={handleInputChange}
                    />

                    <PreviewPanel
                        formData={formData}
                        showPreview={showPreview}
                    />
                </div>
            </div>


        </div>
    );
};

export default Editor;
