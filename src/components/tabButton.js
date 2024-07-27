import React from 'react';
import './tabButton.css'

export default function TabButton({ isSelected, onClick, children, selectedTheme }) {
    return (
        <button onClick={onClick} className={isSelected ? `active ${selectedTheme}` : `tabButton ${selectedTheme}`}>
            {children}
        </button>
    )
}