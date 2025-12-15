
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';
import '../styles/Practice.css';

import EquipmentCarousel from '../components/EquipmentCarousel';

const PracticeEquipment = () => {
    const navigate = useNavigate();
    const [selectedEquipment, setSelectedEquipment] = React.useState([]);

    const handleSelect = (option) => {
        if (selectedEquipment.includes(option.label)) {
            // Deselect if already selected
            setSelectedEquipment(selectedEquipment.filter(item => item !== option.label));
        } else {
            // Add to selection
            setSelectedEquipment([...selectedEquipment, option.label]);
        }
    };

    const handleNext = () => {
        if (selectedEquipment.length > 0) {
            // Save to context/state here if valid selection
            console.log('Proceeding with:', selectedEquipment);
        }
        navigate('/practice/step-2');
    };

    const equipmentOptions = [
        { label: 'Accu-Spina', img: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/5c9d0f74-d684-4a8c-04c1-bf6ef07e4e00/public' },
        { label: 'DRX9000', img: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/93d231f8-a581-49f5-deef-4e3c74992900/public' },
        { label: 'VAX-D', img: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/c1fe537b-af01-4af1-afe9-1cd80dee8000/public' },
        { label: 'Hill-DT', img: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/d5c2c5e7-6bd9-4739-2f07-c912db864300/public' },
        { label: 'DOC', img: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/606a843e-9cef-488d-b00d-c9b04bf95700/public' },
        { label: 'Other', img: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/9f05c3f1-edf7-4cf2-8268-e945bbd4d800/public' }
    ];

    return (
        <div className="basics-container">
            <div className="basics-header">
                <button className="header-icon" onClick={() => navigate('/practice/cover')}><i className="fas fa-arrow-left"></i></button>
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
                        <span className="progress-count">1/3</span>
                    </div>
                    <div className="progress-bars">
                        <div className="progress-step active"></div>
                        <div className="progress-step"></div>
                        <div className="progress-step"></div>
                    </div>
                </div>

                <h2 className="question-title">What equipment do you use in your office for spinal decompression?</h2>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    marginTop: '-1rem',
                    marginBottom: '1.5rem'
                }}>
                    (tap, swipe, and select your table for approval)
                </p>

                <EquipmentCarousel
                    options={equipmentOptions}
                    onSelect={handleSelect}
                    selectedLabels={selectedEquipment}
                    initialActiveIndex={1}
                />
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/practice/cover')}>PREVIOUS</button>
                    <button className="btn-next" onClick={handleNext}>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default PracticeEquipment;
