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
          <div className="button-container">
              <a className={selectedTheme === 'dark-mode' ? 'github-button' : 'github-button-light'} href="https://github.com/DerrickMullins" target="_blank" rel="noopener noreferrer" aria-label="GitHub"/>
              <a className={selectedTheme === 'dark-mode' ? 'linkedin-button' : 'linkedin-button-light'} href="https://www.linkedin.com/in/derrick-mullins-446779285" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"/>
              <a className={selectedTheme === 'dark-mode' ? 'email-button' : 'email-button-light'} href="mailto:djm2382@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"/>
          </div>
          <ToggleButton onClick={toggleTheme} />
          <Typewriter
              header="Derrick Mullins"
              text="Hey there, welcome to my site!!!"
              selectedTheme={selectedTheme}
          />
          <main className={`profile-container ${profileImageIsVisible ? "display-profile" : "hide-profile"}`}>
              <Profile/>
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
