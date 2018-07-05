import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const SolutionsOverviewPageTemplate = ({
  image,
  title,
  subtitle,
  cta,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div>
    <Header
      title={title}
      subtitle={subtitle}
      cta={cta}
      image={image}
    />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content">
                <h2 id="payment-processing" className="is-size-3">
                  Credit &amp; debit card processing for faith based nonprofits
                </h2>
                <p>Everything you need to process credit card and e-check (ACH) transactions without the crazy fees.
  Most organizations save up to 50%. Easily signup for a merchant account to use with your existing platform
  or add our gateway to save even more for your online processing!</p>
                <Link className='button is-primary' to='/solutions/payment-processing'>
                  <span>Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-light">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content">
                <h2 className="is-size-3">
                  A complete, innovative giving platform
                </h2>
                <p>Use our secure giving platform to help your organization increase
giving, leveraging the same at cost credit and debit card processing. Allow your members
to easily give via their computer, mobile phone, or iOS/Android app, while integrating
with your existing Church Management software.</p>
                <Link className='button is-primary' to='/solutions/payment-processing'>
                  <span>Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
)

SolutionsOverviewPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const SolutionsOverviewPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <SolutionsOverviewPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      cta={frontmatter.cta}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  )
}

SolutionsOverviewPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SolutionsOverviewPage

export const productPageQuery = graphql`
  query SolutionsOverviewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        cta {
          ctaText
          ctaLink
          ctaType
        }
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
