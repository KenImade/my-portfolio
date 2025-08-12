import React from 'react';
import { Menu, X } from 'lucide-react';
import useDashboardStore from '../../../store/dashboardStore';

interface MobileMenuButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onToggle }) => {
    const isDarkMode = useDashboardStore(state => state.isDarkMode);

    return (
        <button
            onClick={onToggle}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
                isDarkMode
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
            aria-label={isOpen ? 'Close menu': 'Open menu'}
        >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
    );
};

export default MobileMenuButton;