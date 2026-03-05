import TabButton from './tabButton'
import React, { useEffect, useState } from 'react';
import { contentData } from '/Users/derrickmullins/Desktop/my-site/mySite/src/data.js'



export default function TabNav({selectedTheme, setProfileImageIsVisible}) {
    const [selectedContent, setSelectedContent] = useState(false)
    //const [profileImageIsVisible, setProfileImageIsVisible] = useState(false)

    const handleSelect = (selectedButton) => {
        setSelectedContent(selectedButton)
    }

    useEffect(() => {
        handleSelect(contentData[0].content)
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
                <li>
                    <TabButton
                        selectedTheme={selectedTheme}
                        isSelected={selectedContent === contentData[0].content}
                        onClick={() => handleSelect(contentData[0].content)}
                    >
                        About Me
                    </TabButton>
                </li>
                <li>
                    <TabButton
                        selectedTheme={selectedTheme}
                        isSelected={selectedContent === contentData[1].content}
                        onClick={() => handleSelect(contentData[1].content)}
                    >
                        Experience
                    </TabButton>
                </li>
                <li>
                    <TabButton
                        selectedTheme={selectedTheme}
                        isSelected={selectedContent === contentData[2].content}
                        onClick={() => handleSelect(contentData[2].content)}
                    >
                        Education
                    </TabButton>
                </li>
                <li>
                    <TabButton
                        selectedTheme={selectedTheme}
                        isSelected={selectedContent === contentData[3].content}
                        onClick={() => handleSelect(contentData[3].content)}
                    >
                        Hobbies
                    </TabButton>
                </li>
            </menu>
            <div className={`content-card ${selectedTheme}`}>
                <div className='content'>
                    {selectedContent}
                </div>
            </div>
        </>
    )
}