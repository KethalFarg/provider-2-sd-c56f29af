
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';
import AnimatedBackground from '../components/AnimatedBackground';

const PricingCover = () => {
    const navigate = useNavigate();

    return (
        <AnimatedBackground>
            <div className="basics-header" style={{ borderBottom: 'none', padding: 0, marginBottom: 0 }}>
                <button className="header-icon text-neutral-400" onClick={() => navigate('/patient-flow/step-6')}><i className="fas fa-arrow-left"></i></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/cad90d3a-cd81-431a-ea37-9ce097649e00/public" alt="Logo" style={{ height: '1.25rem' }} />
                    <span className="text-sm text-neutral-300 tracking-wider">OVERVIEW</span>
                </div>
                <button className="header-icon text-neutral-400"><i className="fas fa-times"></i></button>
            </div>

            <div className="cover-content">
                <h1 className="cover-title">Up Next</h1>

                <div className="timeline">
                    <div className="timeline-item">
                        <h3 className="timeline-title" style={{ color: '#737373' }}>The Basics</h3>
                        <p className="timeline-subtitle">4/4 Completed</p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="timeline-title" style={{ color: '#737373' }}>Your Practice</h3>
                        <p className="timeline-subtitle">4/4 Completed</p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="timeline-title" style={{ color: '#737373' }}>Patient Flow & Protocol</h3>
                        <p className="timeline-subtitle">6/6 Completed</p>
                    </div>

                    <div className="timeline-item active">
                        <div className="timeline-dot"></div>
                        <h3 className="timeline-title">Pricing & Sales</h3>
                        <p className="timeline-subtitle">0/4 Completed</p>
                        <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#d4d4d4', lineHeight: '1.5' }}>
                            We'd like to understand your treatment packages, costs, and supporting services. This ensures we can present your program clearly.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h3 className="timeline-title">Mindset & Goals</h3>
                        <p className="timeline-subtitle">0/5 Completed</p>
                    </div>
                </div>
            </div>

            <div className="basics-footer">
                <div className="footer-buttons">
                    <button className="btn-prev" onClick={() => navigate('/patient-flow/step-6')} style={{ backgroundColor: 'black', color: 'white', borderColor: '#404040' }}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/pricing/step-1')} style={{ backgroundColor: 'white', color: 'black' }}>NEXT</button>
                </div>
            </div>
        </AnimatedBackground>
    );
};

export default PricingCover;
