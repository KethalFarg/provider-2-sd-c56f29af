import React, { useMemo } from 'react';
import '../styles/Basics.css';

// Original SVG string provided by user, split for insertion of cache-buster
const svgStart = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000000' width='1920' height='1080'%3E%3C/rect%3E%3Cg id='a' fill='%23288A9E' fill-opacity='0.09'%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.1s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.2s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.3s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.4s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.5s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.6s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.7s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3Crect width='960' height='1080'%3E%3Canimate attributeName='x' values='0%3B-960' dur='2s' calcMode='spline' keySplines='.3 0 .9 .7' begin='0.8s' repeatCount='1' fill='freeze'/%3E%3C/rect%3E%3C/g%3E%3Cuse href='%23a' transform='rotate(180 960 540)'/%3E";
const svgEnd = "%3C/svg%3E";

const AnimatedBackground = ({ children }) => {
    // Generate a unique ID for this instance to force browser to see it as a new image
    // URL encoded comment: <!-- ID -->
    const uniqueId = useMemo(() => Date.now(), []);
    const uniqueSvg = `${svgStart}%3C!--${uniqueId}--%3E${svgEnd}`;

    return (
        <div className="cover-container" style={{ backgroundImage: `url("${uniqueSvg}")` }}>
            {children}
        </div>
    );
};

export default AnimatedBackground;
