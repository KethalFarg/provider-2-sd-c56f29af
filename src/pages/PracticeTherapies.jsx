
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';

const PracticeTherapies = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
        setSelected(option);
    };

    return (
        <div className="basics-container">
            <div className="basics-header">
                <button className="header-icon" onClick={() => navigate('/practice/step-1')}><i className="fas fa-arrow-left"></i></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/c8cb1f6c-850e-4e7f-d538-7c85435d7200/public" alt="Logo" style={{ height: '1.25rem' }} />
                    <span className="header-title">Intake Questionnaire</span>
                </div>
                <button className="header-icon"><i className="fas fa-times"></i></button>
            </div>

            <div className="basics-content">
                <div className="progress-section">
                    <div className="progress-header">
                        <span className="progress-title">Practice Information</span>
                        <span className="progress-count">2/3</span>
                    </div>
                    <div className="progress-bars">
                        <div className="progress-step active"></div>
                        <div className="progress-step active"></div>
                        <div className="progress-step"></div>
                    </div>
                </div>

                <h2 className="question-title">Which decompression therapies are available at your clinic?</h2>

                <div className="options-grid">
                    {['Lumbar', 'Cervical', 'Both'].map((option) => (
                        <button
                            key={option}
                            className={`option-button ${selected === option ? 'selected' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/practice/step-1')}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/practice/step-3')}>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default PracticeTherapies;
