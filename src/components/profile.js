import "./profile.css"
import myLogo from '../assets/oysterMe.jpg'

export default function Profile(){
    return (
        <img
            className="profile-image"
            src={myLogo}
            alt="meAndG"
         />
    )
}