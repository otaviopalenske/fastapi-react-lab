import { usePartnerRotation } from '../../hooks/usePartnerRotation';
import type { PartnerCarouselProps } from '../../interfaces/int_partnerCarouselProps';
import './PartnerCarousel.css';


export default function PartnerCarousel({
    partners,
    isActive = false,
}: PartnerCarouselProps) {
    const { grid, exitingSlots, enteringSlots, pauseRotation, resumeRotation } =
        usePartnerRotation(partners);

    if (!partners || partners.length === 0) return null;

    return (
        <div
            className={`partner-carousel ${isActive ? 'partner-carousel--active' : ''}`}
            onMouseEnter={pauseRotation}
            onMouseLeave={resumeRotation}
        >
            <div className="partner-carousel-list">
                {grid.map((partner, i) => {
                    const slotClass = exitingSlots[i]
                        ? 'partner-slot--exiting'
                        : enteringSlots[i]
                            ? 'partner-slot--entering'
                            : '';

                    return (
                        <a
                            key={`slot-${i}`}
                            href={partner.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`partner-carousel-item ${slotClass}`}
                            title={partner.name}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={partner.logoUrl}
                                alt={partner.name}
                                loading="lazy"
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
