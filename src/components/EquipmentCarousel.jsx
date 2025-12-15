import React, { useState, useRef, useEffect } from 'react';
import '../styles/Practice.css';

const EquipmentCarousel = ({ options, onSelect, selectedLabels = [], initialActiveIndex = 2 }) => {
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % options.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            handleNext();
        } else if (distance < -minSwipeDistance) {
            handlePrev();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Calculate style for each item based on distance from active index
    const getCardStyle = (index) => {
        // Handle wrapping distance logic potentially, but for coverflow usually linear is easier to visualize unless infinite loop
        // Let's do a simple linear visual for now, or a windowed view.

        // Circular distance for infinite feel
        let offset = index - activeIndex;
        // Adjust for wrapping to find shortest path
        if (offset > options.length / 2) offset -= options.length;
        if (offset < -options.length / 2) offset += options.length;

        const isActive = offset === 0;
        const isLeft = offset < 0;
        const isRight = offset > 0;
        const absOffset = Math.abs(offset);

        // Visibility check - only show neighbors
        if (absOffset > 2) {
            return { opacity: 0, pointerEvents: 'none', transform: 'translate(-50%, -50%) scale(0)' };
        }

        const zIndex = 10 - absOffset;
        const opacity = isActive ? 1 : 0.7;
        const scale = isActive ? 1 : 0.7;

        // Transform logic
        // Center: 0
        // Left: Rotate Y 45deg, Translate X -
        // Right: Rotate Y -45deg, Translate X +

        let transform = `translateX(-50%) scale(${scale})`; // Centered base

        if (isLeft) {
            transform = `translateX(calc(-50% - ${60 * absOffset}%)) rotateY(45deg) scale(${scale})`;
        } else if (isRight) {
            transform = `translateX(calc(-50% + ${60 * absOffset}%)) rotateY(-45deg) scale(${scale})`;
        } else {
            transform = `translateX(-50%) rotateY(0deg) scale(${scale})`;
        }

        return {
            zIndex,
            opacity,
            transform,
            filter: isActive ? 'none' : 'grayscale(0.3) brightness(0.7)',
        };
    };

    const handleMouseDown = (e) => {
        touchStartX.current = e.clientX;
        touchEndX.current = e.clientX; // Initialize end to start to avoid null issues
    };

    const handleMouseMove = (e) => {
        if (!touchStartX.current) return;
        touchEndX.current = e.clientX;
    };

    const handleMouseUp = () => {
        if (!touchStartX.current) return;
        // Re-use touch end logic
        handleTouchEnd();
    };

    const handleMouseLeave = () => {
        if (touchStartX.current) {
            handleTouchEnd();
        }
    };

    return (
        <div
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ userSelect: 'none' }}
        >
            <div className="carousel-track">
                {options.map((option, index) => {
                    const style = getCardStyle(index);
                    const isSelected = selectedLabels.includes(option.label);
                    return (
                        <div
                            key={option.label}
                            className={`carousel-card ${index === activeIndex ? 'active' : ''} ${isSelected ? 'selected' : ''}`}
                            style={style}
                            onClick={() => {
                                // Prevent click trigger if we just dragged
                                if (touchStartX.current) return;

                                if (index === activeIndex) {
                                    onSelect && onSelect(option); // Select logic
                                } else {
                                    setActiveIndex(index);
                                }
                            }}
                        >
                            {isSelected && (
                                <div className="detail-checkmark">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '60%', height: '60%' }}>
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                            <div className="equipment-image-container">
                                {option.img ? (
                                    <img src={option.img} alt={option.label} className="equipment-image" draggable={false} />
                                ) : (
                                    <div className="equipment-image-placeholder">Image</div>
                                )}
                            </div>
                            <div className="equipment-label">{option.label}</div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Controls */}
            <div className="carousel-controls">
                <button className="carousel-arrow left" onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: '60%', height: '60%' }}>
                        <g fill="none">
                            <path d="M8 15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2V17c0-1.1-.9-2-2-2z" fill="#F2674B"></path>
                            <path d="M13.1 26.1L24 37c.7.7 1.6 1 2.5 1 3.1 0 4.7-3.8 2.5-6l-4-4h13c2.2 0 4-1.8 4-4s-1.8-4-4-4H25l4-4c2.2-2.2.6-6-2.5-6-.9 0-1.8.4-2.5 1L13.1 21.9c-1.2 1.2-1.2 3 0 4.2zm12.3-13.7c.3-.3.7-.4 1.1-.4 1 0 1.3.7 1.4.9.1.2.3 1-.3 1.7l-4 4c-.6.6-.7 1.4-.4 2.2.3.7 1 1.2 1.8 1.2h13c1.1 0 2 .9 2 2s-.9 2-2 2H25c-.8 0-1.5.5-1.8 1.2-.3.7-.1 1.6.4 2.2l4 4c.7.7.4 1.5.3 1.7s-.5.9-1.4.9c-.4 0-.8-.2-1.1-.4L14.5 24.7c-.3-.3-.3-.6-.3-.7 0-.2 0-.5.3-.7l10.9-10.9z" fill="#648F8E"></path>
                        </g>
                    </svg>
                </button>
                <div className="carousel-minis">
                    {/* Optional dots or mini indicators */}
                    {options.map((_, idx) => (
                        <div
                            key={idx}
                            className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                        />
                    ))}
                </div>
                <button className="carousel-arrow right" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: '60%', height: '60%', transform: 'rotate(180deg)' }}>
                        <g fill="none">
                            <path d="M8 15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2V17c0-1.1-.9-2-2-2z" fill="#F2674B"></path>
                            <path d="M13.1 26.1L24 37c.7.7 1.6 1 2.5 1 3.1 0 4.7-3.8 2.5-6l-4-4h13c2.2 0 4-1.8 4-4s-1.8-4-4-4H25l4-4c2.2-2.2.6-6-2.5-6-.9 0-1.8.4-2.5 1L13.1 21.9c-1.2 1.2-1.2 3 0 4.2zm12.3-13.7c.3-.3.7-.4 1.1-.4 1 0 1.3.7 1.4.9.1.2.3 1-.3 1.7l-4 4c-.6.6-.7 1.4-.4 2.2.3.7 1 1.2 1.8 1.2h13c1.1 0 2 .9 2 2s-.9 2-2 2H25c-.8 0-1.5.5-1.8 1.2-.3.7-.1 1.6.4 2.2l4 4c.7.7.4 1.5.3 1.7s-.5.9-1.4.9c-.4 0-.8-.2-1.1-.4L14.5 24.7c-.3-.3-.3-.6-.3-.7 0-.2 0-.5.3-.7l10.9-10.9z" fill="#648F8E"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};


export default EquipmentCarousel;
