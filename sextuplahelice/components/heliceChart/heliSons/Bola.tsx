import type { BolaProps } from '../../interfaces/int_bolaProps';
import './Bola.css';

export default function Bola({ size = 50, className = '', label, onClick }: BolaProps) {
    return (
        <div
            className={`bola-component ${className}`.trim()}
            style={{ '--bola-size': `${size}px` } as React.CSSProperties}
            onClick={onClick}
            role={onClick ? 'button' : 'presentation'}
            tabIndex={onClick ? 0 : undefined}
        >
            {label && <span className="bola-label">{label}</span>}
        </div>
    );
}
