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
import Footer from '../components/footer';
import { useTheme } from '../ThemeContext.js';

function HomePage() {
    const {selectedTheme, toggleTheme} = useTheme('dark-mode')
    const [profileImageIsVisible, setProfileImageIsVisible] = useState(false)

    return (
        <div className={`App ${selectedTheme}`}>
            <IconContainer />
            <ToggleButton onClick={toggleTheme} />
            <Typewriter
                header="Derrick Mullins"
                text="Hey there, welcome to my site!!!"
            />
            <Scroll heading="Scroll"/>
            <main className={`profile-container ${profileImageIsVisible ? "display-profile" : "hide-profile"}`}>
                <Profile />
                <TabNav setProfileImageIsVisible={setProfileImageIsVisible} />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;