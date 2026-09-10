import type { NavItem } from "../interfaces/int_header";
import type { FooterSection } from '../interfaces/int_footer';


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

export const footerSections: FooterSection[] = [
    {
        title: 'Sobre Nós',
        links: [
            { label: 'Quem Somos', href: '#' },
            { label: 'Nossa História', href: '#' },
            { label: 'Trabalhe Conosco', href: '#' },
            { label: 'Sustentabilidade', href: '#' },
            { label: 'Imprensa', href: '#' },
        ],
    },
    {
        title: 'Ajuda',
        links: [
            { label: 'Central de Ajuda', href: '#' },
            { label: 'Meus Pedidos', href: '#' },
            { label: 'Trocas e Devoluções', href: '#' },
            { label: 'Formas de Pagamento', href: '#' },
            { label: 'Prazos de Entrega', href: '#' },
        ],
    },
    {
        title: 'Serviços',
        links: [
            { label: 'Instalação', href: '#' },
            { label: 'Projetos Sob Medida', href: '#' },
            { label: 'Cartão da Loja', href: '#' },
            { label: 'Lista de Casamento', href: '#' },
            { label: 'Programa de Fidelidade', href: '#' },
        ],
    },
    {
        title: 'Contato',
        links: [
            { label: 'Fale Conosco', href: '#' },
            { label: 'Encontre uma Loja', href: '#' },
            { label: 'WhatsApp', href: '#' },
            { label: 'Ouvidoria', href: '#' },
        ],
    },
];
