// src/components/NavBar.jsx
import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#" className="active">Accueil</a></li>
                <li><a href="#">Cours</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="nav-auth">
                <button className="btn-login">Connexion</button>
                <button className="btn-register">Inscription</button>
            </div>
        </nav>
    );
}

export default NavBar;