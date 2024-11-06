import React, { useState } from 'react';
import DoorControlCard from '../molecules/DoorControlCard';

const DoorControl = () => {
    const [doorStatus, setDoorStatus] = useState(false);

    return <DoorControlCard doorStatus={doorStatus} onToggle={() => setDoorStatus(!doorStatus)} />;
};

export default DoorControl;
