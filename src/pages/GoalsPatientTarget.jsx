
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';
import '../styles/PatientFlow.css'; /* Reuse slider styles */

const GoalsPatientTarget = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(25);

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };

    const handleInputChange = (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val)) val = 0;
        if (val > 100) val = 100; // Cap at max slider value or higher if desired
        setValue(val);
    };

    return (
        <div className="basics-container">
            <div className="basics-header">
                <button className="header-icon" onClick={() => navigate('/goals/step-4')}><i className="fas fa-arrow-left"></i></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/c8cb1f6c-850e-4e7f-d538-7c85435d7200/public" alt="Logo" style={{ height: '1.25rem' }} />
                    <span className="header-title">Intake Questionnaire</span>
                </div>
                <button className="header-icon"><i className="fas fa-times"></i></button>
            </div>

            <div className="basics-content">
                <div className="progress-section">
                    <div className="progress-header">
                        <span className="progress-title">Preferences</span>
                        <span className="progress-count">5/5</span>
                    </div>
                    <div className="progress-bars">
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                    </div>
                </div>

                <h2 className="question-title">How many decompression patients would you like to be seeing each month?</h2>

                <div className="slider-container">
                    <div className="slider-wrapper">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={value}
                            onChange={handleSliderChange}
                            className="slider-input"
                        />
                        <div className="slider-labels">
                            <span>0</span>
                            <span>100</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', gap: '1rem' }}>
                        <label style={{ fontSize: '1rem', color: 'black' }}>Target patients per month:</label>
                        <input
                            type="number"
                            value={value}
                            onChange={handleInputChange}
                            style={{
                                width: '5rem',
                                padding: '0.5rem',
                                textAlign: 'center',
                                fontSize: '1rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '0.375rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/goals/step-4')}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/processing')}>FINISH</button>
                </div>
            </div>
        </div>
    );
};

export default GoalsPatientTarget;
