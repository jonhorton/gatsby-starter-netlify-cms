import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const PricingPageTemplate = ({ title, subtitle, cta, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header
        title={title}
        subtitle={subtitle}
        cta={cta}
        image={image}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <a id="merchant-account"></a>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

PricingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PricingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PricingPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      cta={post.frontmatter.cta}
      image={post.frontmatter.image}
      content={post.html}
    />
  )
}

PricingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        cta {
          ctaText
          ctaLink
          ctaType
        }
        image
      }
    }
  }
`
