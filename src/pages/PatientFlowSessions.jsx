
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';
import '../styles/PatientFlow.css';

const PatientFlowSessions = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(20);

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="basics-container">
            <div className="basics-header">
                <button className="header-icon" onClick={() => navigate('/patient-flow/step-3')}><i className="fas fa-arrow-left"></i></button>
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
                        <span className="progress-count">4/6</span>
                    </div>
                    <div className="progress-bars">
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step"></div>
                        <div className="progress-step"></div>
                    </div>
                </div>

                <h2 className="question-title">On average, how many sessions of treatment do you recommend?</h2>

                <div className="slider-container">
                    <div className="slider-wrapper">
                        <input
                            type="range"
                            min="1"
                            max="50"
                            step="1"
                            value={value}
                            onChange={handleSliderChange}
                            className="slider-input"
                        />
                        <div className="slider-labels">
                            <span>1</span>
                            <span>25</span>
                            <span>50</span>
                        </div>
                    </div>

                    <div className="slider-value-display">
                        <span className="slider-value-number">{value}</span>
                        <span className="slider-value-unit">sessions</span>
                    </div>
                </div>
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/patient-flow/step-3')}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/patient-flow/step-5')}>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default PatientFlowSessions;
