import type { NavItem } from "../interfaces/int_header";
import type { CardProdutoProps } from '../interfaces/int_cardProduto';
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

export const cardProdutos: CardProdutoProps[] = [
    {
        photo: 'https://makerworld.bblmw.com/makerworld/model/US6ddc6daa23360a/design/ea778e8ec02f1c17.png?x-oss-process=image/resize,w_1000/format,webp',
        title: 'Claudinho',
        price: 999.99,
        // width: "900px",
        // height: "980px"
    },
    {
        photo: 'https://http2.mlstatic.com/D_NQ_NP_738968-MLA74977504133_032024-F.jpg',
        title: 'Leroy Merlin Inteira',
        price: 2.50
    },
    {
        photo: 'https://thumbs.dreamstime.com/b/pedreiro-que-ajoelha-se-no-carrinho-de-m%C3%A3o-35513025.jpg',
        title: 'Carrinho de Mão (Pessoa não inclusa)',
        price: 350.00
    },
    {
        photo: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&q=80',
        title: 'Furadeira Profissional',
        price: 189.90
    },
    {
        photo: 'https://makerworld.bblmw.com/makerworld/model/US6ddc6daa23360a/design/ea778e8ec02f1c17.png?x-oss-process=image/resize,w_1000/format,webp',
        title: 'Claudinho',
        price: 999.99,
        // width: "900px",
        // height: "980px"
    }
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
