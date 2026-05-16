import React from 'react'
import {Link} from 'react-router-dom'
// import "../index.css"

const Header = () => {
  return (
    <div className='home-header'>
      <header>
          <h1>
              Welcome to RAMCS.dev
          </h1>
          <p>
              <Link to='/america250' className='am-link'>America 250</Link>
          </p>
      </header>
    </div>
    
  )
}

export default Header
