import React from 'react';
import AttendanceTable from '../molecules/AttendanceTable';

const Attendance = () => {
    const attendanceRecords = [
        { id: 1, name: 'Juan Pérez', time: '08:00', date: '2024-03-06' },
        { id: 2, name: 'María García', time: '08:15', date: '2024-03-06' }
        // Añade más registros si es necesario
    ];

    return (
        <div>
            <h2>Registro de Asistencia</h2>
            <p>Visualiza y gestiona los registros de asistencia</p>
            <AttendanceTable records={attendanceRecords} />
        </div>
    );
};

export default Attendance;
