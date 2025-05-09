import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} AI Academy. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;