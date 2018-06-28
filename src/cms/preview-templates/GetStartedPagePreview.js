import React from 'react'
import PropTypes from 'prop-types'
import { GetStartedPageTemplate } from '../../templates/get-started-page'

const GetStartedPagePreview = ({ entry, widgetFor }) => (
  <GetStartedPageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    content={widgetFor('body')}
  />
)

GetStartedPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GetStartedPagePreview
