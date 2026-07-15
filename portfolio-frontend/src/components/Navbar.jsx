import {Link} from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-brand'>RAM Computer Science</Link>
                <div className='navbar-links'>
                    <Link to='/' className='navbar-link'>Home</Link>
                    <Link to='/projects' className='navbar-link'>Projects</Link>
                </div>
            </div>
        </nav>
    )
}
