import "./footer.css"
import { useTheme } from '../ThemeContext';

export default function Footer() {
    const { selectedTheme } = useTheme();
    return (
        <>
            <div className="footer-container">
                <div className={selectedTheme == 'dark-mode' ? 'dark-footer-font' : 'light-footer-font'}>© 2026 Derrick Mullins. All rights reserved.</div>
            </div>
        </>
    )
}