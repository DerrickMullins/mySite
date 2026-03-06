import '../App.css'
import '../components/tabButton.css'
import React, { useState } from 'react';
import Profile from '../components/profile'
import ToggleButton from '../components/toggleButton'
import '../components/styles.css'
import Typewriter from '../components/typewriter';
import TabNav from '../components/tabNav';
import '../components/typewriter.css'
import Scroll from '../components/scroll'
import IconContainer from '../components/iconContainer';

function HomePage() {
    const [selectedTheme, setSelectedTheme] = useState('dark-mode')
    const [profileImageIsVisible, setProfileImageIsVisible] = useState(false)

    const toggleTheme = () => {
        setSelectedTheme(selectedTheme === 'dark-mode' ? 'light-mode' : 'dark-mode')
    }

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
                <TabNav
                    setProfileImageIsVisible={setProfileImageIsVisible}
                    selectedTheme={selectedTheme}
                />
            </main>
        </div>
    );
}

export default HomePage;