import { useId } from 'react';
import type { SectorCardProps } from '../../interfaces/int_sectorCardProps';
import PartnerCarousel from './PartnerCarousel';
import './SectorCard.css';

/* Caminho SVG da fatia — reutilizado para background, clip e banda */
const SECTOR_PATH =
    `M 118.4 69.7 
     A 450 450 0 0 1 381.6 69.7 
     L 323.1 260.9 
     A 250 250 0 0 0 176.9 260.9 
     Z`;

/* Caminho da faixa inferior de cor */
const BAND_PATH =
    `M 176.9 260.9 
     A 250 250 0 0 1 323.1 260.9 
     L 337.7 213.1 
     A 300 300 0 0 0 162.3 213.1 
     Z`;

export default function SectorCard({
    title,
    className = '',
    rotation = 0,
    number,
    icon,
    mainValue,
    isExpanded = false,
    isCollapsed = false,
    description,
    partners,
    isHovered = false
}: SectorCardProps) {
    const rawId = useId();
    const gradId = `grad-${rawId.replace(/:/g, '')}`;
    const clipId = `clip-${gradId}`;

    const stateClass = isExpanded
        ? 'sector-card--expanded'
        : isCollapsed
            ? 'sector-card--collapsed'
            : '';

    const hoverClass = isHovered && !isExpanded ? 'sector-card--hovered' : '';

    /* Identificadores de setor */
    const isEducation = title.toLowerCase().includes('educação e conhecimento');
    const isPessoas = title.toLowerCase().includes('pessoas');
    const isInvestors = title.toLowerCase().includes('investidores e doadores');

    /* Largura do content wrapper ajustada por estado. Reduzimos para investidores para caber na base afunilada */
    const contentWidth = isCollapsed ? 110 : isExpanded ? (isInvestors ? 145 : 190) : 155;

    /* Tamanho de fonte do title ajustado por estado */
    const iconY = 245;

    return (
        <div
            className={`sector-card-container ${className} ${stateClass} ${hoverClass}`.trim()}
        >
            {/* O viewBox foi calculado matematicamente para formar uma fatia perfeita de 60 graus de um círculo (sextupla hélice) */}
            <svg viewBox="0 40 500 260" className="sector-svg">
                <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.12" />
                    </filter>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--sector-color, #4a6ca5)" />
                        <stop offset="100%" stopColor="var(--sector-color-end, var(--sector-color, #4a6ca5))" />
                    </linearGradient>
                    {/* ClipPath da forma da fatia — garante que NADA vaze para fora */}
                    <clipPath id={clipId}>
                        <path d={SECTOR_PATH} />
                    </clipPath>
                </defs>

                {/* Fundo do Card (Branco com sombra) — usado pelo HeliceChart para hit-testing via isPointInFill() */}
                <path
                    d={SECTOR_PATH}
                    fill="#ffffff"
                    filter="url(#shadow)"
                    className="sector-bg"
                />

                {/* Faixa Inferior de Cor */}
                <path
                    d={BAND_PATH}
                    className="sector-band"
                    style={{ fill: `url(#${gradId})` }}
                />

                {/* Grupo com clipPath — TUDO dentro é cortado pela forma da fatia */}
                <g clipPath={`url(#${clipId})`}>
                    {/* Conteúdo HTML incorporado no centro da fatia */}
                    <foreignObject x="0" y="42" width="500" height="185">
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'visible',
                            }}
                        >
                            <div
                                className="sector-content-wrapper"
                                style={{
                                    transform: `rotate(${-rotation}deg)`,
                                    transition: 'transform 0.3s ease, width 0.4s ease',
                                    width: `${contentWidth}px`,
                                    maxWidth: '90%',
                                    marginTop: isEducation ? '-15px' : (isInvestors && isExpanded ? '-10px' : '0'),
                                }}
                            >
                                {number && <div className="sector-number">{number}</div>}
                                <h3 className="sector-title">
                                    {title}
                                </h3>
                                
                                {mainValue && (
                                    <div 
                                        className={`sector-main-value ${isPessoas && isExpanded ? 'main-value-pessoas' : ''}`}
                                        style={isPessoas && isExpanded ? { fontSize: '36px', marginTop: '6px' } : {}}
                                    >
                                        {mainValue}
                                    </div>
                                )}

                                {/* Conteúdo expandido — carrossel de parceiros ou lista de investidores */}
                                <div className="sector-expanded-content">
                                    {isInvestors && isExpanded ? (
                                        <div className="investors-custom-list">
                                            {partners?.map((partner, i) => (
                                                <div key={i} className="investors-custom-item">
                                                    <span className="investors-custom-name">{partner.name}</span>
                                                    <div className="investors-custom-icon">
                                                        {partner.logoUrl ? <img src={partner.logoUrl} alt="" /> : <div className="investors-placeholder" />}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        partners && partners.length > 0 && (
                                            <PartnerCarousel
                                                partners={partners}
                                                isActive={isExpanded}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </g>

                {/* Ícone na faixa de cor inferior — fora do clip para não ser cortado */}
                {icon && (
                    <foreignObject x="215" y={iconY} width="70" height="65">
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transform: `rotate(${-rotation}deg)`,
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <div
                                className="sector-icon"
                                style={{ '--icon-grad': `url(#${gradId})` } as React.CSSProperties}
                            >
                                {icon}
                            </div>
                        </div>
                    </foreignObject>
                )}
            </svg>
        </div>
    );
}
