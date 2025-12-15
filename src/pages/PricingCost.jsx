
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';
import '../styles/Pricing.css';

const PricingCost = () => {
    const navigate = useNavigate();
    const [cost, setCost] = useState('');

    const handleNumClick = (num) => {
        setCost(prev => prev + num);
    };

    const handleBackspace = () => {
        setCost(prev => prev.slice(0, -1));
    };

    const handleSubmit = () => {
        if (cost) {
            navigate('/pricing/step-2');
        }
    };

    return (
        <div className="basics-container">
            <div className="basics-header">
                <button className="header-icon" onClick={() => navigate('/pricing/cover')}><i className="fas fa-arrow-left"></i></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/c8cb1f6c-850e-4e7f-d538-7c85435d7200/public" alt="Logo" style={{ height: '1.25rem' }} />
                    <span className="header-title">Intake Questionnaire</span>
                </div>
                <button className="header-icon"><i className="fas fa-times"></i></button>
            </div>

            <div className="basics-content">
                <div className="progress-section">
                    <div className="progress-header">
                        <span className="progress-title">Sales</span>
                        <span className="progress-count">1/4</span>
                    </div>
                    <div className="progress-bars">
                        <div className="progress-step active"></div>
                        <div className="progress-step"></div>
                        <div className="progress-step"></div>
                        <div className="progress-step"></div>
                    </div>
                </div>

                <h2 className="question-title">How much is your typical spinal decompression program?</h2>

                <div className="number-input-container">
                    <div className="currency-input-wrapper">
                        <span className="currency-symbol">$</span>
                        <input type="text" className="currency-input" placeholder="0" value={cost} readOnly />
                    </div>

                    <div className="number-pad">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                            <button key={num} className="numpad-btn" onClick={() => handleNumClick(num.toString())}>{num}</button>
                        ))}
                        <button className="numpad-btn" onClick={handleBackspace}><i className="fas fa-backspace"></i></button>
                        <button className="numpad-btn" onClick={() => handleNumClick('0')}>0</button>
                        <button className="numpad-btn" onClick={handleSubmit}><i className="fas fa-check"></i></button>
                    </div>
                </div>
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/pricing/cover')}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/pricing/step-2')}>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCost;
