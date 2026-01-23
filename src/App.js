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
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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

    const handleEmailClick = () => {
        window.location.href = "mailto:djm2382@gmail.com"
    }

    const handleLinkedinClick = () => {
        window.location.href = "https://www.linkedin.com/in/derrick-mullins-446779285"
    }

    const handleGithubClick = () => {
        window.location.href = "https://github.com/DerrickMullins"
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

    // scroll to top of page on page refresh
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    })

    return (
        <div className={`App ${selectedTheme}`}>
            <div class="scroll-progress"/>

            <div className="button-container">
                <EmailOutlinedIcon fontSize='large' onClick={handleEmailClick} style={{ color: selectedTheme === "dark-mode" ? 'white' : 'black', cursor: "pointer" }} />
                <LinkedInIcon fontSize='large' onClick={handleLinkedinClick} style={{ color: selectedTheme === "dark-mode" ? 'white' : 'black', cursor: "pointer" }} />
                <GitHubIcon fontSize='large' onClick={handleGithubClick} style={{ color: selectedTheme === "dark-mode" ? 'white' : 'black', cursor: "pointer" }} />
            </div>
            <ToggleButton onClick={toggleTheme} />
            <Typewriter
                header="Derrick Mullins"
                text="Hey there, welcome to my site!!!"
                selectedTheme={selectedTheme}
            />
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
