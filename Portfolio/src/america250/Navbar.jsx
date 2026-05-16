import {Link} from 'react-router-dom'
import faviconLogo from '../assets/favicon2.svg'; 


export default function Navbar() {

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-brand'>
                <img src={faviconLogo} alt="" className='navbar-icon'/>
                America 250
                </Link>
            </div>
        </nav>
    )
}
