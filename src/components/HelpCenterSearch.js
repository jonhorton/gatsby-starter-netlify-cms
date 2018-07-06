import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const HelpCenterSearch = ({ data }) => (
  <form id="searchForm" >
    <input type="search" id="search" name="search" placeholder="Type your question here" autoFocus />
    <input
      id="searchSubmit"
      type="submit"
      value="Search the Help Center"
      />
  </form>
)

export default HelpCenterSearch
