import TabButton from './tabButton'
import React, { useEffect } from 'react';
import { contentData } from '../data.js'
import { useParams, useNavigate } from "react-router-dom"
import { useTheme } from '../ThemeContext';



export default function TabNav({setProfileImageIsVisible}) {
    const navigate = useNavigate();
    const { selectedContent } = useParams();
    const { selectedTheme } = useTheme();


    const activeTab = contentData.find(item => item.id === selectedContent) || contentData[0];

    const handleSelect = (id) => {
        navigate(`/${id}`);
    }

    useEffect(() => {
        const imageTarget = document.querySelector('.profile-container')
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setProfileImageIsVisible(true)
                }
            })
        },
            {
                threshold: .25,
            }
        )
        observer.observe(imageTarget)
    }, [])

    return (
        <>
            <menu className="horizontal-menu">
                {contentData.map((item) => (
                    <li key={item.id}>
                        <TabButton
                            selectedTheme={selectedTheme}
                            isSelected={activeTab.id === item.id}
                            onClick={() => handleSelect(item.id)}
                        >
                            {item.name}
                        </TabButton>
                    </li>
                ))}
            </menu>
            <div className={`content-card ${selectedTheme}`}>
                <div className='content'>
                    {activeTab.content}
                </div>
            </div>
        </>
    )
}