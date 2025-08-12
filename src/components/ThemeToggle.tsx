import React from 'react';
import { Sun, Moon } from 'lucide-react';
import useDashboardStore from '../store/dashboardStore';

const ThemeToggle: React.FC = () => {
    const {isDarkMode, toggleTheme} = useDashboardStore();

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-md transition-colors duration-200 ${
                isDarkMode
                ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-700'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
            title={isDarkMode ? 'Switch to light mode': 'Switch to dark mode'}
        >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
    );
};

export default ThemeToggle;