import React from 'react';
import ReportGenerationCard from '../molecules/ReportGenerationCard';

const Reports = () => {
    const handleGenerateReport = () => {
        // Lógica para generar el reporte
        console.log('Generando reporte...');
    };

    const handleDownloadCSV = () => {
        // Lógica para descargar el archivo CSV
        console.log('Descargando CSV...');
    };

    return (
        <div>
            <h2>Generación de Reportes</h2>
            <p>Genera y descarga reportes de asistencia</p>
            <ReportGenerationCard
                onGenerateReport={handleGenerateReport}
                onDownloadCSV={handleDownloadCSV}
            />
        </div>
    );
};

export default Reports;
