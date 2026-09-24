import { Search, Heart, User, ShoppingCart, Component } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NavItem } from '../../interfaces/int_header';
import './Header.css';

export default function Header({ headerItems }: { headerItems: NavItem[] }) {
    return (
        <header className="header-container">
            {/* Linha Superior */}
            <div className="header-top">
                <div className="left">

                    <div className="header-search-container">
                        <div className="header-search-wrapper">
                            <Search className="search-icon" size={20} />
                            <input
                                type="text"
                                className="header-search-input"
                                placeholder="De Produtos a Serviços: Digite o que você precisa"
                            />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="header-actions">
                        <button className="icon-button">
                            <Heart size={24} strokeWidth={2} />
                        </button>
                        <button className="icon-button">
                            <User size={24} strokeWidth={2} />
                        </button>
                        <button className="icon-button">
                            <ShoppingCart size={24} strokeWidth={2} />
                        </button>
                    </div>

                </div>



            </div>

            {/* Linha Inferior */}
            <div className="header-bottom">
                <nav className="header-nav-main">
                    <Link to="/" className="nav-item" style={{ textDecoration: 'none' }}>
                        <span>Página Inicial</span>
                    </Link>
                    <Link to="/teste-componentes" className="nav-item" style={{ textDecoration: 'none' }}>
                        <span>Teste de Componentes</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
