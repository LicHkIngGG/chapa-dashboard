import React from 'react';
import Button from '../atoms/Button';

const ReportGenerationCard = ({ onGenerateReport, onDownloadCSV }) => (
    <div className="card">
        <h2>Generación de Reportes</h2>
        <p>Genera y descarga reportes de asistencia</p>
        <div className="button-group">
            <Button text="Generar Reporte" onClick={onGenerateReport} styleType="primary" />
            <Button text="Descargar CSV" onClick={onDownloadCSV} styleType="secondary" />
        </div>
    </div>
);

export default ReportGenerationCard;
