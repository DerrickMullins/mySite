import './toggleButton.css'

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