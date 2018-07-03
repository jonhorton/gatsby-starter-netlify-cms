import React from 'react'
import Link from 'gatsby-link'

const styles = {
  background: "url('/assets/images/img.jpg')center center; background-size:cover"
}

const Footer = ({title,subtitle}) => (
  <footer className="footer has-background-link has-text-white">
    <div className="container">
      <div className="columns">
        <div className="column has-text-white">
          <h4 className="title is-4 has-text-white">
            Explore
          </h4>
          <ul>
            <li><Link className="has-text-white" to="/">Home</Link></li>
            <li>
              <Link className="has-text-white" to="/solutions">Solutions</Link>
              <ul class="list-ul">
                <li><Link className="has-text-white" to="/solutions/payment-processing" title="Signup for a merchant account to begin processing credit & debit cards">Payment Processing</Link></li>
                <li><Link className="has-text-white" to="/solutions/giving-platform">Giving Platform</Link></li>
              </ul>
            </li>
            <li><Link className="has-text-white" to="/pricing">Pricing</Link></li>
            <li><Link className="has-text-white" to="/about">About Us</Link></li>
            <li><Link className="has-text-white" to="/blog">Blog</Link></li>
          </ul>
          <p>&nbsp;</p>
          <p><Link className="button is-invert" to="/get-started">Get Started</Link></p>


        </div>
        <div className="column">
          <h4 className="title is-4 has-text-white">
            Get Help
          </h4>
          <ul>
            <li><Link className="has-text-white" to="https://help.mywell.org">Help Center</Link></li>
            <li><Link className="has-text-white" to="/contact">Contact Us</Link></li>
            <li><Link className="has-text-white" to="#">Chat with a ministry consultant</Link></li>
            <li>Toll Free: (847) 994-7704</li>
          </ul>
          <p>&nbsp;</p>
          <h4 className="title is-4 has-text-white">
            Existing Merchants
          </h4>
          <ul>
            <li><Link className="has-text-white" to="#">Sign In</Link></li>
            <li><Link className="has-text-white" to="#">Merchant Portal</Link></li>
            <li><Link className="has-text-white" to="#">Status</Link></li>
          </ul>
        </div>
        <div className="column is-half content">
          <h4 className="title is-4 has-text-white">
            My Well Ministry
          </h4>
          <p>
            We&#39;re a 501(c)3 nonprofit dedicated to helping you
            free up resources to further your mission.
          </p>

          <p>
            9550 W Higgins Rd 8th Floor
            Rosemont, IL 60018
          </p>
          <h4 className="title is-4 has-text-white">
            Get Connected
          </h4>
          <p>Get the latest news, updates, tips &amp; tricks delivered
          straight to your inbox!</p>

        </div>
      </div>
      <div className="columns">
        <div className="column has-text-white has-text-centered">
          <span class="icon is-medium has-background-white">
            <i class="fas fa-info-circle"></i>
          </span>&nbsp;
          <span class="icon is-medium has-background-white">
            <i class="fas fa-info-circle"></i>
          </span>&nbsp;
          <span class="icon is-medium has-background-white">
            <i class="fas fa-info-circle"></i>
          </span>&nbsp;
          <span class="icon is-medium has-background-white">
            <i class="fas fa-info-circle"></i>
          </span>
        </div>
      </div>
      <div className="columns">
        <div className="column has-text-white">
          &copy; 2018 My Well Ministry
        </div>
        <div className="column has-text-white has-text-right">
          <Link className="has-text-white" to="#">Terms of Service</Link>&nbsp;|&nbsp;
          <Link className="has-text-white" to="#">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
