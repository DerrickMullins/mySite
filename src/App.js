import './App.css'
import TabButton from './components/tabButton'
import './components/tabButton.css'
import React, { useEffect, useState } from 'react';
import { contentData } from './data.js'
import Profile from './components/profile'
import ToggleButton from './components/toggleButton'
import './components/styles.css'
import Typewriter from './components/typewriter';
import './components/typewriter.css'
import Scroll from './components/scroll'
import IconContainer from './components/iconContainer';

function App() {
    const [selectedContent, setSelectedContent] = useState(false)
    const [selectedTheme, setSelectedTheme] = useState('dark-mode')
    const [profileImageIsVisible, setProfileImageIsVisible] = useState(false)

    const toggleTheme = () => {
        setSelectedTheme(selectedTheme === 'dark-mode' ? 'light-mode' : 'dark-mode')
    }

    const handleSelect = (selectedButton) => {
        setSelectedContent(selectedButton)
    }

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

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
        <div className={`App ${selectedTheme}`}>
            <IconContainer selectedTheme={selectedTheme}/>
            <ToggleButton onClick={toggleTheme} />
            <Typewriter
                header="Derrick Mullins"
                text="Hey there, welcome to my site!!!"
                selectedTheme={selectedTheme}
            />
            <Scroll heading="Scroll"/>
            <main className={`profile-container ${profileImageIsVisible ? "display-profile" : "hide-profile"}`}>
                <Profile />
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
            </main>
        </div>
    );
}

export default App;
