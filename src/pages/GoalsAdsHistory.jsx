
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';

const GoalsAdsHistory = () => {
    const navigate = useNavigate();

    return (
        <div className="basics-container">
            <div className="basics-header">
                <button className="header-icon" onClick={() => navigate('/goals/step-2')}><i className="fas fa-arrow-left"></i></button>
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
                        <span className="progress-count">3/5</span>
                    </div>
                    <div className="progress-bars">
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step"></div>
                        <div className="progress-step"></div>
                    </div>
                </div>

                <h2 className="question-title">Have you advertised spinal decompression therapy in the past?</h2>

                <div className="options-grid">
                    <button className="option-button">Yes</button>
                    <button className="option-button">No</button>
                </div>
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/goals/step-2')}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/goals/step-4')}>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default GoalsAdsHistory;
