import React from 'react'
import * as LucideIcons from 'lucide-react';

interface IconMapperProps {
    name: string;
    size?: number;
    color?: string;
}

const IconMapper: React.FC<IconMapperProps> = ({ name, size = 24, color = "currentColor" }) => {
    const IconComponent = (LucideIcons as any)[name];

    if (!IconComponent) {
        return <div style={{ width: size, height: size }} className="bg-white rounded" />;
    }

    return <IconComponent size={size} color={color} />;
}

export default IconMapper;
