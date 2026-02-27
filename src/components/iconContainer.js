import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function IconContainer({selectedTheme}) {
    const handleEmailClick = () => {
        window.location.href = "mailto:djm2382@gmail.com"
    }

    const handleLinkedinClick = () => {
        window.location.href = "https://www.linkedin.com/in/derrick-mullins-446779285"
    }

    const handleGithubClick = () => {
        window.location.href = "https://github.com/DerrickMullins"
    }

    return (
        <div className="button-container">
            <EmailOutlinedIcon fontSize='large' onClick={handleEmailClick} style={{ color: selectedTheme === "dark-mode" ? 'white' : 'black', cursor: "pointer" }} />
            <LinkedInIcon fontSize='large' onClick={handleLinkedinClick} style={{ color: selectedTheme === "dark-mode" ? 'white' : 'black', cursor: "pointer" }} />
            <GitHubIcon fontSize='large' onClick={handleGithubClick} style={{ color: selectedTheme === "dark-mode" ? 'white' : 'black', cursor: "pointer" }} />
        </div>
    )
}