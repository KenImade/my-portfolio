import React from "react";
import useDashboardStore from '../../../store/dashboardStore';
import ThemeToggle from "../../ThemeToggle";

interface DesktopNavProps {
    navItems: {id: string; label: string; icon: React.ComponentType<any>}[];
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, currentPage, setCurrentPage}) => {
    const isDarkMode = useDashboardStore(state => state.isDarkMode);

    return (
        <>
            <nav className="flex space-x-8">
                {navItems.map(({id, label, icon: Icon}) => (
                    <button
                        key={id}
                        onClick={() => setCurrentPage(id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                            ${
                                currentPage === id
                                ? 'text-blue-600 bg-blue-50'
                                : isDarkMode
                                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            }`}    
                    >
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                    </button>
                ))}
            </nav>
            <ThemeToggle />
        </>
    )
}

export default DesktopNav;