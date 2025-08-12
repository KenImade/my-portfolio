import React from "react";
import { NavLink } from "react-router-dom";
import useDashboardStore from "../../../store/dashboardStore";
import ThemeToggle from "../../ThemeToggle";
import type { NavItem } from "../Header";

interface DesktopNavProps {
    navItems: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {
    const isDarkMode = useDashboardStore(state => state.isDarkMode);

    return (
        <>
            <nav className="flex space-x-8">
                {navItems.map(({id, label, icon: Icon, path}) => (
                    <NavLink
                        key={id}
                        to={path}
                        end
                        className={({isActive}) => `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                            ${
                                isActive
                                ? 'text-blue-600 bg-blue-200'
                                : isDarkMode
                                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            }`}    
                    >
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>
            <ThemeToggle />
        </>
    )
}

export default DesktopNav;