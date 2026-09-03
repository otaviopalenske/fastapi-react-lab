import React from 'react';
import { Search, Heart, User, ShoppingCart, ChevronDown, Menu } from 'lucide-react';
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
                    <button className="nav-item departments-btn">
                        <span>Departamentos</span>
                    </button>

                    {headerItems.slice(1).map((item, index) => (
                        <button key={index} className="nav-item">
                            {item.label}
                            {item.hasDropdown && <ChevronDown size={16} className="chevron-icon" />}
                        </button>
                    ))}
                </nav>

                {/* <nav className="header-nav-secondary">
                    {secondaryNavItems.map((item, index) => (
                        <a key={index} href={item.href} className="nav-link-secondary">
                            {item.label}
                        </a>
                    ))}
                </nav> */}
            </div>
        </header>
    );
}
