import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const HelpCenterSearch = ({ data }) => (
  <div className="columns">
    <div className="column">
      <form id="searchForm" className="is-inline-block">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input is-large is-pulled-left is-size-6"
              type="text"
              id="search"
              name="search"
              placeholder="Type your question here"
              autoFocus
            />
          </div>
          <div className="control">
            <button
              className="button is-primary is-pulled-left"
              id="searchSubmit"
              type="submit"
              value="Search the Help Center">
                Search
            </button>
          </div>
        </div>


      </form>
    </div>
  </div>
)

export default HelpCenterSearch
