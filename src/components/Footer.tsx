import React from 'react';
import FBI from '../assets/FBI.jpg'
import Interpol from '../assets/Interpol.png'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="logo">
                <img src="Pentagon.png" alt="Pentagon" />
                <img src={FBI} alt="FBI" />
                <img src={Interpol} alt="Interpol" />
            </div>
            <p>Pentagon сотрудничая с FBI и INTERPOL</p>
        </footer>
    );
};

export default Footer;
