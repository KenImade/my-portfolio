import React from 'react'
import type { FormData } from '../Editor'

import { calculateReadTime } from '../../../utils/calculateReadTime';

interface ContentEditorProps {
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ formData, handleInputChange }) => {
    return (
        <div className="bg-blue-200 dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Content * Markdown
            </h2>
            <textarea
                name='content'
                value={formData.content}
                onChange={handleInputChange}
                rows={20}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white font-mono text-sm resize-vertical"
                placeholder="# Your Article Title

Write your article content here using Markdown syntax...

## Code Example

```javascript
console.log('Hello, World!');
```

## Lists

- Item 1
- Item 2
- Item 3

**Bold text** and *italic text*"
            />
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Estimated read time: {calculateReadTime(formData.content)}
            </div>
        </div>
    )
}

export default ContentEditor