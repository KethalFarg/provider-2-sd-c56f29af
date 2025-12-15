
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Basics.css';
import AnimatedBackground from '../components/AnimatedBackground';

const BasicsCover = () => {
    const navigate = useNavigate();

    return (
        <AnimatedBackground>
            <div className="basics-header" style={{ borderBottom: 'none', padding: 0, marginBottom: 0 }}>
                {/* Mock header icons for visual consistency */}
                <button className="header-icon text-neutral-400"><i className="fas fa-arrow-left"></i></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/cad90d3a-cd81-431a-ea37-9ce097649e00/public" alt="Logo" style={{ height: '1.25rem' }} />
                    <span className="text-sm text-neutral-300 tracking-wider">OVERVIEW</span>
                </div>
                <button className="header-icon text-neutral-400"><i className="fas fa-times"></i></button>
            </div>

            <div className="cover-content">
                <h1 className="cover-title">LET'S GET STARTED</h1>
                <p className="cover-desc">
                    This intake should take about 5 minutes to complete. The information you provide will help us determine if you qualify as a preferred provider.
                </p>

                <div className="timeline">
                    <div className="timeline-item active">
                        <div className="timeline-dot"></div>
                        <h3 className="timeline-title">The Basics</h3>
                        <p className="timeline-subtitle">0/4 Completed</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h3 className="timeline-title">Your Practice</h3>
                        <p className="timeline-subtitle">0/4 Completed</p>
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
                <button className="cover-cta" onClick={() => navigate('/basics/step-1')}>
                    NEXT
                </button>
            </div>
        </AnimatedBackground>
    );
};

export default BasicsCover;
