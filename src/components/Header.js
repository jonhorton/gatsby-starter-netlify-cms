import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'

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

const Header = ({title,subtitle,cta,image}) => (
  <section className="hero is-primary is-medium" style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
    <div className="hero-head">
      <Navbar />
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-2">
          {title}
        </h1>
        {subtitle ? <h2 className="subtitle is-4">{subtitle}</h2> : <h2 className="subtitle">This is a subtitle</h2> }
        <div className='buttons is-centered'>
          <DisplayCta cta={cta}/>
        </div>
      </div>
    </div>
  </section>
)

export default Header
