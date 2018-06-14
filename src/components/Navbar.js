import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.png'
import { Toggle } from 'react-powerplug'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="My Well Ministry" style={{ width: '175px', maxHeight: 'auto'}} />
          </figure>
        </Link>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <div role="button" className={on ? 'navbar-burger is-active' : 'navbar-burger'} onClick={toggle} aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          )}
        </Toggle>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/solutions">
            Solutions
          </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/solutions">
                Overview
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/solutions">
                Payment Processing
              </Link>
              <Link className="navbar-item" to="/solutions">
                Giving Platform
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/pricing">
            Pricing
          </Link>
          <Link className="navbar-item" to="/about">
            About Us
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>

          <Link className="navbar-item" to="/contact">
            Contact Us
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/solutions">
            Sign In
          </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/solutions">
                Giving Platform
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/">
                Transnational Gateway
              </Link>
              <Link className="navbar-item" to="/">
                Merchant Portal
              </Link>
            </div>
          </div>
          <div className="navbar-item">
              <Link className="button is-primary" to="/get-started">
                <span>Get Started</span>
              </Link>
          </div>

        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
