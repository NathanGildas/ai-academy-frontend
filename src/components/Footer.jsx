// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>AI Academy</h3>
                    <p>La plateforme d'apprentissage dédiée à l'intelligence artificielle.</p>
                </div>

                <div className="footer-section">
                    <h3>Liens rapides</h3>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                        <li><Link to="/courses">Cours</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@aiacademy.fr</p>
                    <p>Tél: +33 1 23 45 67 89</p>
                    <p>Adresse: 123 Avenue de l'Innovation, 75001 Paris</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AI Academy. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;