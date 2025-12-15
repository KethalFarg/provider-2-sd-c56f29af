import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import '../styles/Basics.css';
import '../styles/Processing.css';

const ProcessingPage = () => {
    const navigate = useNavigate();
    const [showContent, setShowContent] = React.useState(false);

    useEffect(() => {
        // Show content after 2 seconds
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 2000);

        // Navigate after 5 seconds
        const navigateTimer = setTimeout(() => {
            navigate('/completion');
        }, 5000);

        return () => {
            clearTimeout(contentTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return (
        <AnimatedBackground>
            <div className="processing-container">
                <div style={{
                    opacity: showContent ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem'
                    }}>Processing</h2>

                    <div className="gearbox">
                        <div className="overlay"></div>
                        <div className="gear one">
                            <div className="gear-inner">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                        <div className="gear two">
                            <div className="gear-inner">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                        <div className="gear three">
                            <div className="gear-inner">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                        <div className="gear four large">
                            <div className="gear-inner">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AnimatedBackground>
    );
};

export default ProcessingPage;
