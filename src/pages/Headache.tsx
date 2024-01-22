import { Link } from 'react-router-dom'
import './Headache.css'

export function Headache() {
    return (
        <div className="headache__wrapper">
            <div className="headache__circle"></div>
            <div className="headache__msg">
                <p>Oh! You found this page! Go back! It's gonna strain your eyes!</p>
            </div>
            <Link to="/">
                <div className="headache__goback">
                    Take me outta here!
                </div>
            </Link>
        </div>
    )
}