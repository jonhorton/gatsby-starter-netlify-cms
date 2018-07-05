import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/Hero'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="My Well Ministry: Nonprofit credit card processing services"
      link={[
          { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]}
    />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
