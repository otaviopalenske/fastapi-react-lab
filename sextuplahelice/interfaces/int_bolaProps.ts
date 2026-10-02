import type { ReactNode } from 'react';

export interface BolaProps {
    size?: number;
    className?: string;
    label?: ReactNode;
    onClick?: () => void;
}
