// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar';

const Header = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term.trim()) {
            navigate(`/search?q=${encodeURIComponent(term)}`);
        }
    };

    return (
        <header className="main-header">
            <div className="header-top">
                <div className="logo">
                    <Link to="/">
                        <h1>AI Academy</h1>
                    </Link>
                </div>
                <SearchBar onSearch={handleSearch} />
            </div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            À propos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>
                            Cours
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/member" className={({ isActive }) => isActive ? 'active' : ''}>
                            Espace Membre
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;