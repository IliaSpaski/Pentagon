import React from 'react';
import './AboutUs.css';
import Img1 from '../assets/Img_1.jpg'
import Img2 from '../assets/Img_3.jpg'
import Img3 from '../assets/Img_2.jpg'

interface Section {
    title: string;
    description: string;
    imageUrl: string;
}

const sections: Section[] = [
    {
        title: 'Наш взгляд',
        description: 'Совершенство благодаря таланту, технологиям и разнообразию',
        imageUrl: Img1,
    },
    {
        title: 'Наш правоохранительный орган',
        description: 'Наши правоохранительные полномочия и обязанности закреплены в Уголовном кодексе США, раздел 18 USC 3056 — Полномочия, полномочия и обязанности Секретной службы США.',
        imageUrl: Img2,
    },
    {
        title: 'Партнерские отношения',
        description: 'Секретная служба никогда не работает в одиночку. Мы полностью выполняем нашу миссию посредством прочного партнерства с местными, государственными, федеральными и международными правоохранительными органами и частным сектором.',
        imageUrl: Img3,
    },
];

const AboutUs: React.FC = () => {
    return (
        <div className="about-us">
            <h2>О нас</h2>
            <p className="description">
                У нас есть комплексная миссия по <span className="highlight">защите</span> и <span className="highlight">финансовом расследованиям</span>, чтобы обеспечить безопасность наших покровителей, ключевых мест и событий национального значения. Мы также защищаем целостность нашей валюты и расследуем преступления против финансовой системы США, совершаемые преступниками по всему миру и в киберпространстве.
            </p>
            <div className="stars">★★★★★</div>

            <div className="sections">
                {sections.map((section, index) => (
                    <div key={index} className="section">
                        <img src={section.imageUrl} alt={section.title} />
                        <div className="content">
                            <h3>{section.title}</h3>
                            <div className="stars">★★★★★</div>
                            <p>{section.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;