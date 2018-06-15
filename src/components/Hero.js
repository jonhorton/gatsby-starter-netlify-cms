import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Link from 'gatsby-link'

const Hero = ({ heroes }) => (
  <section className="hero is-primary is-medium">
    <div class="container has-text-centered">
      <h1 className="title">
        Hero Title
        {/*{hero.title*/}
      </h1>
      <h2 className="subtitle">
        Hero subtitle
      </h2>
      <Link className="button is-primary" to="/get-started">
        <span>Get Started</span>
      </Link>
    </div>
</section>
)

Hero.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Hero
