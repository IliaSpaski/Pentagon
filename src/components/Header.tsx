import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="Pentagon.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/about">О нас</a></li>
                    <li><a href="/investigate">Расследования</a></li>
                    <li><a href="/">Розыск</a></li>
                </ul>
            </nav>
        </header>
    );
}; 

export default Header;
