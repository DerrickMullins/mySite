import './App.css'
import TabButton from './components/tabButton'
import './components/tabButton.css'
import React, { useState } from 'react'
import { contentData } from './data.js'
import Profile from './components/profile'
import ToggleButton from './components/toggleButton'
import './components/styles.css'


function App() {
  const [selectedContent, setSelectedContent] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState('dark-mode')

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === 'dark-mode' ? 'light-mode' : 'dark-mode')
  }

  const handleSelect = (selectedButton) => {
    setSelectedContent(selectedButton)
  }
  

  return (
    <div className="App">
      <div className={`App ${selectedTheme}`}>
        <div class="button-container">
          <a className={selectedTheme === 'dark-mode' ? 'github-button' : 'github-button-light'} href="https://github.com/DerrickMullins" target="_blank" aria-label="GitHub"/>
          <a className={selectedTheme === 'dark-mode' ? 'linkedin-button' : 'linkedin-button-light'} href="https://www.linkedin.com/in/derrick-mullins-446779285" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"/>
          <a className={selectedTheme === 'dark-mode' ? 'email-button' : 'email-button-light'} href="mailto:djm2382@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"/>
        </div>
        <ToggleButton onClick={toggleTheme} />
        <div className="profile-container">
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
                Contact
              </TabButton>
            </li>
          </menu>
          <div className={`content-card ${selectedTheme}`}>
            <div className='content'>
              {selectedContent ? (selectedContent) : (<span className="typewriter">Hi, I'm Derrick Mullins!!!</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
