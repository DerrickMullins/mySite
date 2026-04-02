import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState('dark-mode');

    const toggleTheme = () => {
        setSelectedTheme((prev) => (prev === 'dark-mode' ? 'light-mode' : 'dark-mode'));
    };

    return (
        <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);