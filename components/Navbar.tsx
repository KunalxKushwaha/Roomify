import { Box } from 'lucide-react'
import React from 'react'

const Navbar = () => {

    const handleAuthClick = async () => {

    }
  return (
    <header className='navbar'>
      
      <nav className='inner'>
        <div className='left'>
            <div className='brand'>
                <Box className='logo'/>
                <span className='name'>
                    Roomify
                </span>
            </div>

            <ul className='links'>
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Communoity</a>
                <a href="#">Enterprice</a>
            </ul>
        </div>

        <div className='actions'>
            <button onClick={handleAuthClick} className='login'>
                Login
            </button>
            
            <a href="#upload" className='cta'>Get Started</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
