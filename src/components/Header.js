import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import HelpCenterSearch from '../components/HelpCenterSearch'

const styles = {
  background: "url('/assets/images/img.jpg')center center; background-size:cover"
}

const displaySubtitle = ({ title }) => (
  <h2 className="subtitle">
    {title ? `Hello ${title}` : 'Please sign in'}
  </h2>
);

const DisplayCta = ({cta}) => {
	if (!cta) {
		return null;
	}
  return (
      cta.map(item => (
          <Link className={item.ctaType + ' is-white is-invert'} to={item.ctaLink}>
            <span>{item.ctaText} →</span>
          </Link>
      ))
  )
}

const Header = ({title,subtitle,date,cta,helpcenter,image}) => (
  <section className="hero is-primary is-medium" style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
    <div className="hero-head">
      <Navbar />
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title is-2">
              {title}
            </h1>
            {subtitle ? <h2 className="subtitle is-4">{subtitle}</h2> : null }
            {date ? <p class="subtitle"><em>{date}</em></p> : null}
            {helpcenter ? <HelpCenterSearch/> : null}

            <DisplayCta cta={cta}/>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Header
