
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';

const PatientFlowImaging = () => {
    const navigate = useNavigate();

    return (
        <div className="basics-container">
            <div className="basics-header">
                <button className="header-icon" onClick={() => navigate('/patient-flow/step-2')}><i className="fas fa-arrow-left"></i></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/c8cb1f6c-850e-4e7f-d538-7c85435d7200/public" alt="Logo" style={{ height: '1.25rem' }} />
                    <span className="header-title">Intake Questionnaire</span>
                </div>
                <button className="header-icon"><i className="fas fa-times"></i></button>
            </div>

            <div className="basics-content">
                <div className="progress-section">
                    <div className="progress-header">
                        <span className="progress-title">Protocol</span>
                        <span className="progress-count">3/6</span>
                    </div>
                    <div className="progress-bars">
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step"></div>
                        <div className="progress-step"></div>
                        <div className="progress-step"></div>
                    </div>
                </div>

                <h2 className="question-title">Do you require MRI images prior to treatment?</h2>

                <div className="options-grid">
                    <button className="option-button">Yes</button>
                    <button className="option-button">No</button>
                </div>
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/patient-flow/step-2')}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/patient-flow/step-4')}>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default PatientFlowImaging;
