import './toggleButton.css'
import moonIcon from '../assets/moon-svgrepo-com.svg'
import sunIcon from '../assets/sun-2-svgrepo-com.svg'

export default function ToggleButton({ onClick }) {
    return (
        <>
            <label className="switch">
                <input className="checkbox" onClick={onClick} type="checkbox"/>
                <span className="slider round">
                    <span className='sun-icon'/>
                    <span className='moon-icon'/>
                </span>
            </label>
        </>
    )
}