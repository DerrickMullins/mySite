import TabButton from './tabButton'
import React, { useEffect } from 'react';
import { contentData } from '/Users/derrickmullins/Desktop/my-site/mySite/src/data.js'
import { useParams, useNavigate } from "react-router-dom"



export default function TabNav({selectedTheme, setProfileImageIsVisible}) {
    const navigate = useNavigate();
    const { selectedContent: urlParam } = useParams();

    const activeTab = contentData.find(item => item.id === urlParam) || contentData[0];

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