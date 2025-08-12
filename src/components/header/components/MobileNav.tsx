import React from "react";
import useDashboardStore from "../../../store/dashboardStore";
import ThemeToggle from "../../ThemeToggle";
import type { NavItem } from "../Header";
import { NavLink } from "react-router-dom";

interface MobileNavProps {
    navItems: NavItem[];
    setIsMobileMenuOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
    navItems, setIsMobileMenuOpen
}) => {
    const isDarkMode = useDashboardStore(state => state.isDarkMode)

    return (
        <nav className={`md:hidden py-4 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {navItems.map(({id, label, icon: Icon, path }) => (
                <NavLink
                    key={id}
                    to={path}
                    end
                    className={({isActive}) => `flex items-center space-x-3 w-full px-3 py-3 text-left rounded-md transition-colors duration-200 ${
                        isActive
                        ? 'text-blue-600 bg-blue-200'
                        : isDarkMode
                            ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                </NavLink>
            ))}

            <ThemeToggle />
        </nav>
    )
}

export default MobileNav;