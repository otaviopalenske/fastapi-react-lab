import { useState, useRef, useCallback, createElement } from 'react';
import SectorCard from './heliSons/SectorCard';
import Bola from './heliSons/Bola';
import { heliceSlices } from '../../constants/helice_const';
import './HeliceChart.css';


/**
 * Hit-testing via SVG geometry — usa isPointInFill() nos paths .sector-bg
 * para determinar em qual fatia o cursor está, com precisão pixel-perfect.
 * getScreenCTM() converte coordenadas de tela para o sistema local do SVG,
 * levando em conta TODAS as CSS transforms (rotate, scale, translate).
 */
function getSectorFromEvent(
    e: React.MouseEvent,
    wrapperEl: HTMLDivElement | null
): number | null {
    if (!wrapperEl) return null;

    const bgPaths = wrapperEl.querySelectorAll<SVGPathElement>('.sector-bg');

    for (let i = 0; i < bgPaths.length; i++) {
        const path = bgPaths[i];
        const ctm = path.getScreenCTM();
        if (!ctm) continue;

        // Converte coordenada de tela → coordenada local do path SVG
        const screenPt = new DOMPoint(e.clientX, e.clientY);
        const localPt = screenPt.matrixTransform(ctm.inverse());

        if (path.isPointInFill(localPt)) {
            return i;
        }
    }
    return null;
}

export default function HeliceChart() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const sector = getSectorFromEvent(e, wrapperRef.current);
        setHoveredIndex(sector);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    const handleClick = useCallback((e: React.MouseEvent) => {
        const sector = getSectorFromEvent(e, wrapperRef.current);
        if (sector !== null) {
            setExpandedIndex((prev) => (prev === sector ? null : sector));
        }
    }, []);

    const hasExpanded = expandedIndex !== null;
    const bolaSize = hasExpanded ? 220 : 280;

    return (
        <div
            className={`helice-chart-wrapper ${hoveredIndex !== null ? 'helice-chart--sector-hovered' : ''}`}
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="helice-chart-inner">
                {heliceSlices.map((slice, index) => {
                    const rotation = index * 40;
                    const isExpanded = expandedIndex === index;
                    const isCollapsed = hasExpanded && !isExpanded;

                    // Escala e offset radial diferenciados — crescimento sutil
                    const scale = isExpanded ? 1.15 : isCollapsed ? 0.88 : 1;
                    // Offset radial: afasta o card expandido do centro (translateY negativo no eixo local)
                    const radialOffset = isExpanded ? -12 : 0;

                    const sliceClass = isExpanded
                        ? 'helice-slice--expanded'
                        : isCollapsed
                            ? 'helice-slice--collapsed'
                            : '';

                    return (
                        <div
                            key={index}
                            className={`helice-slice-container ${sliceClass}`}
                            style={{
                                transform: `rotate(${rotation}deg) scale(${scale}) translateY(${radialOffset}px)`
                            }}
                        >
                            <SectorCard
                                icon={createElement(slice.icon)}
                                title={slice.title}
                                mainValue={slice.mainValue}
                                className={slice.className}
                                rotation={rotation}
                                isExpanded={isExpanded}
                                isCollapsed={isCollapsed}
                                description={slice.description}
                                partners={slice.partners}
                                isHovered={hoveredIndex === index}
                            />
                        </div>
                    );
                })}
                <div className="helice-center-container">
                    <Bola size={bolaSize} label={
                        <>
                            Sistema<br />
                            Municipal de<br />
                            Inovação de<br />
                            Umuarama
                        </>
                    } className={`tema-bola-center ${hasExpanded ? 'bola--compact' : ''}`} />
                </div>
            </div>
        </div>
    );
}
