import type { NavItem } from "../interfaces/int_header";

export const headerNavItems: NavItem[] = [
        { label: 'Departamentos', hasDropdown: false },
        { label: 'Tendências', hasDropdown: true },
        { label: 'Ofertas', hasDropdown: false },
        { label: 'Projetos', hasDropdown: true },
        { label: 'Dicas', hasDropdown: true },
        { label: 'Serviços', hasDropdown: true },
        { label: 'Para empresas', hasDropdown: false },
        { label: 'Para empresas', hasDropdown: false },
];

export const secondaryNavItems: NavItem[] = [
        { label: 'Leroy Merlin Pay', href: '#' },
        { label: 'Programa de Fidelidade', href: '#' },
];
