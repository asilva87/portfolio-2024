import { Link } from 'react-router-dom'
import './NotFound.css'

export function NotFound() {
    return (
        <div className="notfound__wrapper">
            <div className="notfound__html-error">
                <p>404</p>
            </div>
            <div className="notfound__text">
                <p id="first-line">Meddling with the URL?</p>
                <p id="second-line">There's nothing here.</p>
            </div>
            <Link to="/">
                <div className="notfound__home-link">
                    <p>/</p>
                </div>
            </Link>
        </div>
    )
}