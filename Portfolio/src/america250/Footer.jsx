import React from 'react'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <a href="https://www.fidihospitality.com/">
        <img src='https://www.fidihospitality.com/wp-content/uploads/2025/01/logo-white-100h.png' className='footer-logo'/>
      </a>

      <div className='footer-text'>
        <span className='footer-contact'>Phone: 
            <a className='detail-phone' href={`tel:+18778850705`}> 877.885.0705</a>
        </span>
                <div className='footer-copy'>
            &copy;{new Date().getFullYear()} FiDi Hospitality 
        </div>
      </div>
          
    </footer>
  )
}//Footer
