import { User, Building2, Rocket, Landmark, HeartHandshake, FlaskConical, GraduationCap, Coins, Scale } from 'lucide-react';
import type { SliceData } from '../interfaces/int_sliceData';

// Helper para gerar URL de favicon do Google (funciona sem auth)
const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

// Dados mock para o StaticHeliceChart — versão com parceiros reduzidos
export const staticHeliceSlices: SliceData[] = [
    {
        title: 'PESSOAS',
        mainValue: '2.345',
        icon: User,
        className: 'tema-sector-1',
        description: 'Cidadãos engajados no ecossistema de inovação.',
        partners: []
    },
    {
        title: 'EMPRESAS MUNICIPAIS',
        mainValue: '1.112',
        icon: Building2,
        className: 'tema-sector-2',
        description: 'Empresas locais que impulsionam a economia.',
        partners: [
            { name: 'COCAMAR', logoUrl: favicon('cocamar.com.br'), websiteUrl: 'https://cocamar.com.br' },
            { name: 'Copel', logoUrl: favicon('copel.com'), websiteUrl: 'https://copel.com' },
            { name: 'Sanepar', logoUrl: favicon('sanepar.com.br'), websiteUrl: 'https://sanepar.com.br' },
            { name: 'Sicoob', logoUrl: favicon('sicoob.com.br'), websiteUrl: 'https://sicoob.com.br' },
            { name: 'Unimed', logoUrl: favicon('unimed.coop.br'), websiteUrl: 'https://unimed.coop.br' },
            { name: 'Cresol', logoUrl: favicon('cresol.com.br'), websiteUrl: 'https://cresol.com.br' },
        ]
    },
    {
        title: 'STARTUPS INOVADORAS',
        mainValue: '34',
        icon: Rocket,
        className: 'tema-sector-3',
        description: 'Startups disruptivas que nascem e crescem no município.',
        partners: [
            { name: 'Nubank', logoUrl: favicon('nubank.com.br'), websiteUrl: 'https://nubank.com.br' },
            { name: 'iFood', logoUrl: favicon('ifood.com.br'), websiteUrl: 'https://ifood.com.br' },
            { name: 'Hotmart', logoUrl: favicon('hotmart.com'), websiteUrl: 'https://hotmart.com' },
            { name: 'RD Station', logoUrl: favicon('rdstation.com'), websiteUrl: 'https://rdstation.com' },
            { name: 'VTEX', logoUrl: favicon('vtex.com'), websiteUrl: 'https://vtex.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
            { name: 'Conta Azul', logoUrl: favicon('contaazul.com'), websiteUrl: 'https://contaazul.com' },
        ]
    },
    {
        title: 'SETOR PÚBLICO LOCAL',
        mainValue: '18',
        icon: Landmark,
        className: 'tema-sector-4',
        description: 'Órgãos municipais que fomentam inovação.',
        partners: [
            { name: 'Gov.br', logoUrl: favicon('gov.br'), websiteUrl: 'https://gov.br' },
            { name: 'IBGE', logoUrl: favicon('ibge.gov.br'), websiteUrl: 'https://ibge.gov.br' },
            { name: 'Correios', logoUrl: favicon('correios.com.br'), websiteUrl: 'https://correios.com.br' },
            { name: 'Detran PR', logoUrl: favicon('detran.pr.gov.br'), websiteUrl: 'https://detran.pr.gov.br' },
            { name: 'TCE-PR', logoUrl: favicon('tce.pr.gov.br'), websiteUrl: 'https://tce.pr.gov.br' },
        ]
    },
    {
        title: 'TERCEIRO SETOR',
        mainValue: '42',
        icon: HeartHandshake,
        className: 'tema-sector-5',
        description: 'ONGs que promovem impacto social.',
        partners: [
            { name: 'APAE', logoUrl: favicon('apae.com.br'), websiteUrl: 'https://apae.com.br' },
            { name: 'UNICEF', logoUrl: favicon('unicef.org'), websiteUrl: 'https://unicef.org' },
            { name: 'Greenpeace', logoUrl: favicon('greenpeace.org'), websiteUrl: 'https://greenpeace.org' },
            { name: 'WWF', logoUrl: favicon('wwf.org.br'), websiteUrl: 'https://wwf.org.br' },
            { name: 'Cruz Vermelha', logoUrl: favicon('cruzvermelha.org.br'), websiteUrl: 'https://cruzvermelha.org.br' },
            { name: 'MSF', logoUrl: favicon('msf.org.br'), websiteUrl: 'https://msf.org.br' },
        ]
    },
    {
        title: 'AMBIENTES PROMOTORES',
        mainValue: '6',
        icon: FlaskConical,
        className: 'tema-sector-6',
        description: 'Hubs e incubadoras que catalisam inovação.',
        partners: [
            { name: 'Google', logoUrl: favicon('google.com'), websiteUrl: 'https://startup.google.com' },
            { name: 'Endeavor', logoUrl: favicon('endeavor.org.br'), websiteUrl: 'https://endeavor.org.br' },
            { name: 'Cubo Itaú', logoUrl: favicon('cubo.network'), websiteUrl: 'https://cubo.network' },
            { name: 'Abstartups', logoUrl: favicon('abstartups.com.br'), websiteUrl: 'https://abstartups.com.br' },
            { name: 'WeWork', logoUrl: favicon('wework.com'), websiteUrl: 'https://wework.com' },
        ]
    },
    {
        title: 'EDUCAÇÃO E CONHECIMENTO',
        mainValue: '15',
        icon: GraduationCap,
        className: 'tema-sector-7',
        description: 'Universidades e centros de pesquisa.',
        partners: [
            { name: 'UNIPAR', logoUrl: favicon('unipar.br'), websiteUrl: 'https://unipar.br' },
            { name: 'UNESPAR', logoUrl: favicon('unespar.edu.br'), websiteUrl: 'https://unespar.edu.br' },
            { name: 'IFPR', logoUrl: favicon('ifpr.edu.br'), websiteUrl: 'https://ifpr.edu.br' },
            { name: 'UFPR', logoUrl: favicon('ufpr.br'), websiteUrl: 'https://ufpr.br' },
            { name: 'SENAI', logoUrl: favicon('senaipr.org.br'), websiteUrl: 'https://senaipr.org.br' },
            { name: 'USP', logoUrl: favicon('usp.br'), websiteUrl: 'https://usp.br' },
        ]
    },
    {
        title: 'INVESTIDORES E DOADORES',
        mainValue: '9',
        icon: Coins,
        className: 'tema-sector-8',
        description: 'Investidores e fundos que financiam inovação.',
        partners: [
            { name: 'Fundo de Capital Anjo', logoUrl: favicon('capital.com'), websiteUrl: '#' },
            { name: 'Grupo de Investimento "Sombra"', logoUrl: favicon('invest.com'), websiteUrl: '#' },
            { name: "Doação 'X'", logoUrl: favicon('doacao.org'), websiteUrl: '#' },
            { name: 'Perfil de Venture Capital', logoUrl: favicon('vc.com'), websiteUrl: '#' },
        ]
    },
    {
        title: 'ENTIDADES DE CLASSE',
        mainValue: '7',
        icon: Scale,
        className: 'tema-sector-9',
        description: 'Sindicatos e conselhos de setores produtivos.',
        partners: [
            { name: 'FIEP', logoUrl: favicon('fiepr.org.br'), websiteUrl: 'https://fiepr.org.br' },
            { name: 'OAB-PR', logoUrl: favicon('oabpr.org.br'), websiteUrl: 'https://oabpr.org.br' },
            { name: 'CREA-PR', logoUrl: favicon('crea-pr.org.br'), websiteUrl: 'https://crea-pr.org.br' },
            { name: 'CRC-PR', logoUrl: favicon('crcpr.org.br'), websiteUrl: 'https://crcpr.org.br' },
            { name: 'CRA-PR', logoUrl: favicon('cra-pr.org.br'), websiteUrl: 'https://cra-pr.org.br' },
        ]
    },
];
