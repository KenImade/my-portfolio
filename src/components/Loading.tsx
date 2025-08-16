import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading: React.FC = () => {
    return (
        <div className='min-h-screen py-12 flex items-center justify-center'>
            <div className='text-center'>
                <Loader2 className='h-8 w-8 animate-spin text-blue-600 mx-auto mb-4' />
                <p className='text-gray-600 dark:text-gray-300'>Loading articles....</p>
            </div>
        </div>
    )
}

export default Loading;