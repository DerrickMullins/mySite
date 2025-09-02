import React, { useState, useEffect } from 'react';

const Typewriter = ({ header, text, typingSpeed = 150, onTypingComplete, selectedTheme }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        if (!typingDone && charIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timer);

        } else if (charIndex === text.length && !typingDone) {
            setTypingDone(true);
            if (onTypingComplete) {
                onTypingComplete();
            }
        }
    }, [charIndex, text, typingSpeed, typingDone, onTypingComplete]);

    return (
        <div className={`typewriter-container ${typingDone ? 'typewriter-done' : ''}`}>
            <h1 className={`header`}>{ header }</h1>
            <h2 className={`typewriter-text ${selectedTheme}`}>{displayedText}</h2>
        </div>
    );
};

export default Typewriter;