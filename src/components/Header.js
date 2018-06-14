import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.png'
import { Toggle } from 'react-powerplug'

const Header = () => (
    <div
      className='navbar'
      style={{ }}
    >
      <div
        style={{
          width: 150,
          display: 'inline-block',
        }}
      >
        <a href="https://mywell.org">
          <div
            className='logo'
            style={{
              background: `url(${logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          />
        </a>
      </div>
      <Toggle initial={false}>
        {({ on, off, toggle}) => (
          <span>
            <a href="#" id="mobileMenuIcon" onClick={toggle} className={on ? "menuHidden" : ""}>&#9776;</a>
            <a href="#" id="mobileCloseIcon" onClick={toggle} className={off ? "menuHidden" : ""}>×</a>
            <div
              id='listContainer'
              onClick={toggle} className={off ? "menuHidden" : ""}
              style={{
                }}
              >
              <ul
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                <li>
                  <a
                    href="https://mywell.org"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="https://mywell.org/facts-2"
                  >
                    Facts
                  </a>
                </li>
                <li>
                  <a
                    href="https://mywell.org/benefits"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="https://mywell.org/faqs"
                  >
                    Faqs
                  </a>
                </li>
                <li className="activeLine">
                  <Link
                    to="/"
                    className="active"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </span>
      )}
      </Toggle>
    </div>

)

export default Header
