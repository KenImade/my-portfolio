import React from 'react'
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const AddArticleButton: React.FC = () => {
  return (
    <div className="inline-flex">
      <Link
        to="/editor"
        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
      >
        <Plus className="h-5 w-5" />
        <span>New Draft</span>
      </Link>
    </div>
  )
}

export default AddArticleButton;