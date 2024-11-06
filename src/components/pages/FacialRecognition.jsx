import React from 'react';
import Button from '../atoms/Button';

const FacialRecognition = () => {
    const handleStartRecognition = () => {
        // Lógica para iniciar el reconocimiento facial
        console.log('Iniciando reconocimiento facial...');
    };

    return (
        <div>
            <h2>Reconocimiento Facial</h2>
            <p>Inicia el proceso de reconocimiento facial</p>
            <Button
                text="Iniciar Reconocimiento Facial"
                onClick={handleStartRecognition}
                styleType="primary"
                icon={<span role="img" aria-label="reconocimiento">👤</span>}
            />
        </div>
    );
};

export default FacialRecognition;
