import React from 'react';
import InputSwitch from '../atoms/InputSwitch';

const DoorControlCard = ({ doorStatus, onToggle }) => (
    <div className="card">
        <h2>Control de Puerta</h2>
        <p>Controla el acceso a la puerta eléctrica</p>
        <InputSwitch
            isOn={doorStatus}
            onToggle={onToggle}
            label={`Estado de la Puerta: ${doorStatus ? 'Abierta' : 'Cerrada'}`}
        />
    </div>
);

export default DoorControlCard;
