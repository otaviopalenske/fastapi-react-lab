import type { LucideIcon } from 'lucide-react';
import type { SectorPartner } from './int_sectorCardProps';

export interface SliceData {
    title: string;
    mainValue: string;
    icon: LucideIcon;
    className: string;
    description: string;
    partners: SectorPartner[];
}
