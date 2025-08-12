import React from "react";
import useDashboardStore from "../../../store/dashboardStore";
import ThemeToggle from "../../ThemeToggle";

interface MobileNavProps {
    navItems: {id: string; label: string; icon: React.ComponentType<any>}[];
    currentPage: string;
    setCurrentPage: (page: string) => void;
    setIsMobileMenuOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
    navItems, currentPage, setCurrentPage, setIsMobileMenuOpen
}) => {
    const isDarkMode = useDashboardStore(state => state.isDarkMode)

    return (
        <nav className={`md:hidden py-4 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {navItems.map(({id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => {
                        setCurrentPage(id);
                        setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-3 py-3 text-left rounded-md transition-colors duration-200 ${
                        currentPage === id
                        ? 'text-blue-600 bg-blue-200'
                        : isDarkMode
                            ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                </button>
            ))}

            <ThemeToggle />
        </nav>
    )
}

export default MobileNav;