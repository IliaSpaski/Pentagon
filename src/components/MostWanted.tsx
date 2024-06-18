import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Person = {
    id: string;
    name: string;
    reward: string;
    imageUrl: string;
};

const MostWanted: React.FC = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const navigate = useNavigate();

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/people');
                setPeople(response.data);
            } catch (error) {
                console.error('Error fetching people data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="most-wanted">
            <h2>Самые разыскиваемые беглецы</h2>
            <div className="people-list">
                {people.map((person) => (
                    <div key={person.id} className="person-card">
                        <img src={`http://localhost:5000/img/${person.imageUrl}`} alt={person.name} />
                        <h3>{person.name}</h3>
                        <p>{person.reward}</p>
                        <button onClick={() => navigate(`/people/${person.id}`)}>Посмотреть больше</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostWanted;
