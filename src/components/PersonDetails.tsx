// src/components/PersonDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type Person = {
    id: string;
    name: string;
    aliases: string[];
    dob: string;
    nationality: string;
    citizenship: string;
    height: string;  
    weight: string;
    hairColor: string;
    eyeColor: string;
    office: string;
    imageUrl: string;
    description: string;
    caseSummary: string;
};

const PersonDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/people/${id}`);
                setPerson(response.data);
            } catch (error) {
                console.error('Error fetching person data', error);
            }
        };

        fetchPerson();
    }, [id]);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <div className="person-details">
            <h1>{person.name}</h1>
            <div className="person-details-header">
                <img src={`http://localhost:5000/img/${person.imageUrl}`} alt={person.name} />
                <div className="person-info">
                    <p><strong>Псевдонимы:</strong> {person.aliases.join(', ')}</p>
                    <p><strong>Дата рождения:</strong> {person.dob}</p>
                    <p><strong>Гражданство:</strong> {person.nationality}</p>
                    <p><strong>Цвет волос:</strong> {person.hairColor}</p>
                    <p><strong>Цвет глаз:</strong> {person.eyeColor}</p>
                    <p><strong>Офис секретной службы:</strong> {person.office}</p>
                </div>
            </div>
            <div className="person-case-summary">
                <h2>Резюме дела</h2>
                <p>{person.caseSummary}</p>
            </div>
        </div>
    );
};

export default PersonDetails;
