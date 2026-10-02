import type { ReactNode } from 'react';

export interface SectorPartner {
    name: string;
    logoUrl: string;
    websiteUrl: string;
}

export interface SectorCardProps {
    title: string;
    className?: string;
    rotation?: number;
    number?: string | number;
    icon?: ReactNode;
    mainValue?: string | number;
    isExpanded?: boolean;
    isCollapsed?: boolean;
    isHovered?: boolean;
    description?: string;
    partners?: SectorPartner[];
    onClick?: () => void;
}
