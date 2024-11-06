import React from 'react';

const AttendanceTable = ({ records }) => (
    <table className="attendance-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Hora</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {records.map((record) => (
                <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.name}</td>
                    <td>{record.time}</td>
                    <td>{record.date}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default AttendanceTable;
