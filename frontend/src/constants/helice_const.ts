import { User, Building2, Rocket, Building, HeartHandshake, FlaskConical, GraduationCap, TrendingUp, Scale } from 'lucide-react';
import type { SliceData } from '../interfaces/int_sliceData';

// Helper para gerar URL de favicon do Google (funciona sem auth)
export const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

// Dados mock para as 9 fatias da sêxtupla hélice — logos reais via Google Favicons
export const heliceSlices: SliceData[] = [
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
            { name: 'Bradesco', logoUrl: favicon('bradesco.com.br'), websiteUrl: 'https://bradesco.com.br' },
            { name: 'Itaú', logoUrl: favicon('itau.com.br'), websiteUrl: 'https://itau.com.br' },
            { name: 'Magazine Luiza', logoUrl: favicon('magazineluiza.com.br'), websiteUrl: 'https://magazineluiza.com.br' },
            { name: 'Mercado Livre', logoUrl: favicon('mercadolivre.com.br'), websiteUrl: 'https://mercadolivre.com.br' },
            { name: 'Casas Bahia', logoUrl: favicon('casasbahia.com.br'), websiteUrl: 'https://casasbahia.com.br' },
            { name: 'Lojas Americanas', logoUrl: favicon('americanas.com.br'), websiteUrl: 'https://americanas.com.br' },
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
            { name: 'Loggi', logoUrl: favicon('loggi.com'), websiteUrl: 'https://loggi.com' },
            { name: 'Gympass', logoUrl: favicon('gympass.com'), websiteUrl: 'https://gympass.com' },
            { name: 'Loft', logoUrl: favicon('loft.com.br'), websiteUrl: 'https://loft.com.br' },
            { name: 'QuintoAndar', logoUrl: favicon('quintoandar.com.br'), websiteUrl: 'https://quintoandar.com.br' },
            { name: 'Creditas', logoUrl: favicon('creditas.com'), websiteUrl: 'https://creditas.com' },
            { name: 'Neon', logoUrl: favicon('neon.com.br'), websiteUrl: 'https://neon.com.br' },
        ]
    },
    {
        title: 'SETOR PÚBLICO LOCAL',
        mainValue: '18',
        icon: Building,
        className: 'tema-sector-4',
        description: 'Órgãos municipais que fomentam inovação.',
        partners: [
            { name: 'Gov.br', logoUrl: favicon('gov.br'), websiteUrl: 'https://gov.br' },
            { name: 'IBGE', logoUrl: favicon('ibge.gov.br'), websiteUrl: 'https://ibge.gov.br' },
            { name: 'Correios', logoUrl: favicon('correios.com.br'), websiteUrl: 'https://correios.com.br' },
            { name: 'Detran PR', logoUrl: favicon('detran.pr.gov.br'), websiteUrl: 'https://detran.pr.gov.br' },
            { name: 'TCE-PR', logoUrl: favicon('tce.pr.gov.br'), websiteUrl: 'https://tce.pr.gov.br' },
            { name: 'BNDES', logoUrl: favicon('bndes.gov.br'), websiteUrl: 'https://bndes.gov.br' },
            { name: 'Receita Federal', logoUrl: favicon('gov.br/receitafederal'), websiteUrl: 'https://gov.br/receitafederal' },
            { name: 'INSS', logoUrl: favicon('inss.gov.br'), websiteUrl: 'https://inss.gov.br' },
            { name: 'Prefeitura Umuarama', logoUrl: favicon('umuarama.pr.gov.br'), websiteUrl: 'https://umuarama.pr.gov.br' },
            { name: 'Câmara Umuarama', logoUrl: favicon('camaraumuarama.pr.gov.br'), websiteUrl: 'https://camaraumuarama.pr.gov.br' },
            { name: 'Governo do Paraná', logoUrl: favicon('pr.gov.br'), websiteUrl: 'https://pr.gov.br' },
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
            { name: 'Rotary Club', logoUrl: favicon('rotary.org'), websiteUrl: 'https://rotary.org' },
            { name: 'Lions Club', logoUrl: favicon('lionsclubs.org'), websiteUrl: 'https://lionsclubs.org' },
            { name: 'Oxfam Brasil', logoUrl: favicon('oxfam.org.br'), websiteUrl: 'https://oxfam.org.br' },
            { name: 'SOS Mata Atlântica', logoUrl: favicon('sosma.org.br'), websiteUrl: 'https://sosma.org.br' },
            { name: 'Instituto Ethos', logoUrl: favicon('ethos.org.br'), websiteUrl: 'https://ethos.org.br' },
        ]
    },
    {
        title: 'AMBIENTES PROMOTORES',
        mainValue: '6',
        icon: FlaskConical,
        className: 'tema-sector-6',
        description: 'Hubs e incubadoras que catalisam inovação.',
        partners: [
            { name: 'Google for Startups', logoUrl: favicon('google.com'), websiteUrl: 'https://startup.google.com' },
            { name: 'Endeavor', logoUrl: favicon('endeavor.org.br'), websiteUrl: 'https://endeavor.org.br' },
            { name: 'Cubo Itaú', logoUrl: favicon('cubo.network'), websiteUrl: 'https://cubo.network' },
            { name: 'Abstartups', logoUrl: favicon('abstartups.com.br'), websiteUrl: 'https://abstartups.com.br' },
            { name: 'WeWork', logoUrl: favicon('wework.com'), websiteUrl: 'https://wework.com' },
            { name: 'ACE Startups', logoUrl: favicon('acestartups.com.br'), websiteUrl: 'https://acestartups.com.br' },
            { name: 'SEBRAE', logoUrl: favicon('sebrae.com.br'), websiteUrl: 'https://sebrae.com.br' },
            { name: 'Startup Farm', logoUrl: favicon('startupfarm.com.br'), websiteUrl: 'https://startupfarm.com.br' },
            { name: 'FIESP', logoUrl: favicon('fiesp.com.br'), websiteUrl: 'https://fiesp.com.br' },
            { name: 'Y Combinator', logoUrl: favicon('ycombinator.com'), websiteUrl: 'https://ycombinator.com' },
            { name: '500 Startups', logoUrl: favicon('500.co'), websiteUrl: 'https://500.co' },
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
            { name: 'UNICAMP', logoUrl: favicon('unicamp.br'), websiteUrl: 'https://unicamp.br' },
            { name: 'UTFPR', logoUrl: favicon('utfpr.edu.br'), websiteUrl: 'https://utfpr.edu.br' },
            { name: 'Coursera', logoUrl: favicon('coursera.org'), websiteUrl: 'https://coursera.org' },
            { name: 'Alura', logoUrl: favicon('alura.com.br'), websiteUrl: 'https://alura.com.br' },
            { name: 'Descomplica', logoUrl: favicon('descomplica.com.br'), websiteUrl: 'https://descomplica.com.br' },
            { name: 'FIEP', logoUrl: favicon('fiepr.org.br'), websiteUrl: 'https://fiepr.org.br' },
        ]
    },
    {
        title: 'INVESTIDORES E DOADORES',
        mainValue: '9',
        icon: TrendingUp,
        className: 'tema-sector-8',
        description: 'Investidores e fundos que financiam inovação.',
        partners: []
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
            { name: 'CRO-PR', logoUrl: favicon('cropr.org.br'), websiteUrl: 'https://cropr.org.br' },
            { name: 'CFM', logoUrl: favicon('cfm.org.br'), websiteUrl: 'https://cfm.org.br' },
            { name: 'CONFEA', logoUrl: favicon('confea.org.br'), websiteUrl: 'https://confea.org.br' },
            { name: 'CDL Umuarama', logoUrl: favicon('cdlumuarama.com.br'), websiteUrl: 'https://cdlumuarama.com.br' },
            { name: 'ACIT', logoUrl: favicon('acit.com.br'), websiteUrl: 'https://acit.com.br' },
            { name: 'SINDUSCON-PR', logoUrl: favicon('sindusconpr.com.br'), websiteUrl: 'https://sindusconpr.com.br' },
        ]
    },
];
