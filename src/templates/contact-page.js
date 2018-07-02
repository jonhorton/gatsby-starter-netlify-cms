import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header'

export const ContactPageTemplate = ({ title, content, subtitle, image, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header
        title={title}
        subtitle={subtitle}
        image={image}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      image={post.frontmatter.image}
      content={post.html}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const aboutPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        image
      }
    }
  }
`
