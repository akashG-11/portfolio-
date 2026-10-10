import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const requestRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });
    const [hoverType, setHoverType] = useState(null);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        // Detect desktop (if touch screen, don't show custom cursor)
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const handleMouseMove = (e) => {
            target.current = { x: e.clientX, y: e.clientY };
            // Initialize position instantly on first move
            if (position.current.x === 0 && position.current.y === 0) {
                position.current = { x: e.clientX, y: e.clientY };
            }
        };

        const handleMouseOver = (e) => {
            const isClickable = e.target.closest('a, button, input, textarea, select, [role="button"], [onclick], .interactable');
            // Adding specific text tags so we don't trigger on empty container divs
            const isText = e.target.closest('h1, h2, h3, h4, p, li, blockquote');
            
            if (isClickable) {
                setHoverType('clickable');
            } else if (isText) {
                setHoverType('text');
            } else {
                setHoverType(null);
            }
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);

        const updateCursor = () => {
            // Linear interpolation (lerp) for smooth trailing
            position.current.x += (target.current.x - position.current.x) * 0.15;
            position.current.y += (target.current.y - position.current.y) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
            }

            requestRef.current = requestAnimationFrame(updateCursor);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('blur', handleMouseUp);
        
        requestRef.current = requestAnimationFrame(updateCursor);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('blur', handleMouseUp);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    if (window.matchMedia("(pointer: coarse)").matches) return null;

    return (
        <div 
            ref={cursorRef} 
            className={`custom-cursor ${hoverType ? 'hovering-' + hoverType : ''} ${isPressed ? 'clicking' : ''}`}
        ></div>
    );
};

export default CustomCursor;
