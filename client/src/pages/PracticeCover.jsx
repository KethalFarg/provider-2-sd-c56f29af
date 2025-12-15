
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';
import AnimatedBackground from '../components/AnimatedBackground';

const PracticeCover = () => {
    const navigate = useNavigate();

    return (
        <AnimatedBackground>
            <div className="basics-header" style={{ borderBottom: 'none', padding: 0, marginBottom: 0 }}>
                <button className="header-icon text-neutral-400" onClick={() => navigate('/basics/step-4')}><i className="fas fa-arrow-left"></i></button>
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
                        {/* Completed state for Basics */}
                        {/* In a real app we'd likely have a smarter component or condition here */}
                        <h3 className="timeline-title" style={{ color: '#737373' }}>The Basics</h3>
                        <p className="timeline-subtitle">4/4 Completed</p>
                    </div>

                    <div className="timeline-item active">
                        <div className="timeline-dot"></div>
                        <h3 className="timeline-title">Your Practice</h3>
                        <p className="timeline-subtitle">0/4 Completed</p>
                        <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#d4d4d4', lineHeight: '1.5' }}>
                            We're now going to ask about your clinic setup and the decompression services you provide. This helps us understand how your program is structured.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h3 className="timeline-title">Patient Flow & Protocol</h3>
                        <p className="timeline-subtitle">0/2 Completed</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h3 className="timeline-title">Pricing & Sales</h3>
                        <p className="timeline-subtitle">0/7 Completed</p>
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
                    <button className="btn-prev" onClick={() => navigate('/basics/step-4')} style={{ backgroundColor: 'black', color: 'white', borderColor: '#404040' }}>PREVIOUS</button>
                    <button className="btn-next" onClick={() => navigate('/practice/step-1')} style={{ backgroundColor: 'white', color: 'black' }}>NEXT</button>
                </div>
            </div>
        </AnimatedBackground>
    );
};

export default PracticeCover;
