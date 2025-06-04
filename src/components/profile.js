import "./profile.css"
import myLogo from '../assets/oysterMe.jpg'

export default function Profile({profileImageIsVisible}){
    return (
        <img
            className={`profile-image`}
            src={myLogo}
            alt="profile-image"
         />
    )
}