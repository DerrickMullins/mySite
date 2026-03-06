import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            404 Not Found
            <Link to="/">Home</Link>
        </div>
    )
}