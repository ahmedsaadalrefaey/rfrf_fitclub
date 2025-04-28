import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">

        <img src={Logo} alt="" className="logo" />

        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: 'var(--appColor)',
              padding: '0.5rem',
              borderRadius: '5px',
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img
              src={Bars}
              alt=""
              style={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link
                activeClass="active"
                onClick={() => setMenuOpened(false)}
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpened(false)}
                to="programs" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpened(false)}
                to="reasons" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpened(false)}
                to="plans" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpened(false)}
                to="testimonials" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpened(false)}
                to="join" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}
              >
                Join Now
              </Link>
            </li>
          </ul>
        )}

    </div>
  )
}

export default Header
