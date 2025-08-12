import React from "react";
import { BookOpen, Code2, FolderOpen, Mail, User } from 'lucide-react';
import useDashboardStore from "../../store/dashboardStore";
import DesktopNav from "./components/DesktopNav";
import MobileMenuButton from "./components/MobileMenuButton";
import MobileNav from "./components/MobileNav";

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
    currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen
}) => {
    const isDarkMode = useDashboardStore(state => state.isDarkMode);

    const navItems = [
        {id: 'home', label: 'Home', icon: Code2},
        {id: 'about', label: 'About', icon: User},
        {id: 'projects', label: 'Projects', icon: FolderOpen},
        {id: 'blog', label: 'Blog', icon: BookOpen},
        {id: 'contact', label: 'Contact', icon: Mail},
    ];

    return (
        <header className={`shadow-lg sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                            <Code2 className="h-6 w-6 text-white"/>
                        </div>
                        <span className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Kenneth Imade
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <DesktopNav 
                            navItems={navItems}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                    

                    <MobileMenuButton 
                        isOpen={isMobileMenuOpen}
                        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>
                {isMobileMenuOpen && (
                    <MobileNav 
                        navItems={navItems}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
                )}
            </div>
        </header>
    )
}

export default Header;