import type { SectorPartner } from '../../interfaces/int_sectorCardProps';
import './PartnerCarousel.css';

interface PartnerCarouselProps {
    partners: SectorPartner[];
    isActive?: boolean;
}

export default function PartnerCarousel({
    partners,
    isActive = false,
}: PartnerCarouselProps) {
    if (!partners || partners.length === 0) return null;

    return (
        <div className={`partner-carousel ${isActive ? 'partner-carousel--active' : ''}`}>
            <div className="partner-carousel-list">
                {partners.map((partner, i) => (
                    <a
                        key={`${partner.name}-${i}`}
                        href={partner.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="partner-carousel-item"
                        title={partner.name}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={partner.logoUrl}
                            alt={partner.name}
                            loading="lazy"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
