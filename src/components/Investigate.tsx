import React from 'react';
import Img1 from '../assets/Investigate_Img_1.jpg'
import Img2 from '../assets/Investigate_Img_2.jpg'
import Img3 from '../assets/Investigate_Img_3.png'
import Img4 from '../assets/Investigate_Img_4.jpg'
import Img5 from '../assets/Investigate_Img_5.jpg'
import Img6 from '../assets/Investigate_Img_6.png'
import Img7 from '../assets/Investigate_Img_7.jpg'
import Img8 from '../assets/Investigate_Img_8.jpg'
import Img9 from '../assets/Investigate_Img_9.jpg'
import './Investigate.css';


interface Investigation {
    title: string;
    description: string;
    imageUrl: string;
}

const investigations: Investigation[] = [
    {
        title: 'Терроризм',
        description: 'Чтобы противостоять терроризму, это является главным приоритетом разведывательной службы. Мы используем наши способности и разведывательные возможности для нейтрализации отечественных экстремистов и помощи в ликвидации террористических сетей по всему миру.',
        imageUrl: Img1,
    },
    {
        title: 'Киберпреступность',
        description: 'ФБР является ведущим федеральным агентством по расследованию кибератак и преступлений, зарубежных противников и преступников. Угрозы национальной безопасности и рост киберпреступности растет.',
        imageUrl: Img2,
    },
    {
        title: 'Контрразведка',
        description: 'ФБР является ведущим агентством по разоблачению, предотвращению и расследованию разведывательной деятельности, включая шпионаж, в США.',
        imageUrl: Img3,
    },
    {
        title: 'Гражданские права',
        description: 'ФБР, ведущее агентство по обеспечению соблюдения законов о гражданских правах, активно расследует преступления на почве ненависти, жестокости полиции и другие государственные нарушения, торговлю людьми и дискриминацию в работе, а также нарушения свободы доступа к выборам и клиентов.',
        imageUrl: Img4,
    },
    {
        title: 'Государственная коррупция',
        description: 'Государственная коррупция является главным приоритетом уголовных расследований ФБР, включая нарушения незаконных платежей на выборах, международную коррупцию и коррупцию в торгах.',
        imageUrl: Img5,
    },
    {
        title: 'Оружие массового поражения',
        description: 'Управление по оружию массового уничтожения расследует и работает над предотвращением инцидентов, связанных с ядерным, радиологическим, биологическим или химическим оружием.',
        imageUrl: Img6,
    },
    {
        title: 'Организованная преступность',
        description: 'ФБР занимается ликвидацией транснациональных организованных преступных группировок, которые представляют наибольшую угрозу национальной и экономической безопасности США.',
        imageUrl: Img7,
    },
    {
        title: 'Жестокое преступление',
        description: 'Эти преступления не имеют насильственного характера, но не остаются без жертв. Преступления "белых воротничков" могут разрушить компании, лишить людей их сбережений и стоить инвесторам миллиарды долларов, а также подорвать доверие общества к институтам.',
        imageUrl: Img8,
    },
    {
        title: 'Преступления белых воротничков',
        description: 'Эти преступления не имеют насильственного характера, но не остаются без жертв. Преступления "белых воротничков" могут разрушить компании, лишить людей их сбережений и стоить инвесторам миллиарды долларов, а также подорвать доверие общества к институтам.',
        imageUrl: Img9,
    },
];

const Investigate: React.FC = () => {
    return (
        <div className="what-we-investigate">
            <h2>Что мы расследуем</h2>
            <div className="grid">
                {investigations.map((investigation, index) => (
                    <div key={index} className="grid-item">
                        <img src={investigation.imageUrl} alt={investigation.title} />
                        <div className="content">
                            <h3>{investigation.title}</h3>
                            <p>{investigation.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Investigate;