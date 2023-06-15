import React from 'react'

function Header() {
  return (
    <header className="container">
        <h1 className='header-title'>Our Pricing</h1>
        <div className='toggle-container'>
            <p className='header-text'>Annually</p>
            <div className='toggle-holder'>
                <div className='toggle'></div>
            </div>
            <p className='header-text'>Monthly</p>
        </div>
    </header>
  )
}

export default Header