import type { FooterSection } from '../../interfaces/int_footer';
import './Footer.css';

export default function Footer({ footerSections }: { footerSections: FooterSection[] }) {
    return (
        <footer className="footer-container">
            {/* Seções Principais */}
            <div className="footer-top">
                {footerSections.map((section, index) => (
                    <div key={index} className="footer-section">
                        <h3 className="footer-section-title">{section.title}</h3>
                        <ul className="footer-section-list">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="footer-section-item">
                                    <a href={link.href || '#'} className="footer-section-link">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Linha Inferior */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} FastAPI React Lab. Todos os direitos reservados.
                </p>
                <div className="footer-bottom-links">
                    <a href="#" className="footer-bottom-link">Política de Privacidade</a>
                    <a href="#" className="footer-bottom-link">Termos de Uso</a>
                    <a href="#" className="footer-bottom-link">Mapa do Site</a>
                </div>
            </div>
        </footer>
    );
}
