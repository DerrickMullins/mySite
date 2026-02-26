import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from 'react';
import "./scroll.css"

export default function Scroll({heading, selectedTheme}) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(true)
        } 
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`scroll ${scrolled ? "hide-scroll" : ""}`}>
            <h1>{heading}</h1>
            <ArrowDownwardIcon fontSize='large'/>
        </div>
    )
}