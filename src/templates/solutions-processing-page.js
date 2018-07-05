import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const SolutionsProcessingPageTemplate = ({
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
  <section className="section ">
    <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 id="two-simple-options" className="title is-size-2 is-bold-light has-text-centered">
                Two Simple Options
              </h2>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
            <div className="content">
              <h3 className="is-size-4">
                Merchant Account
              </h3>
              <p>
                We handle the behind the scenes payment processing
                for Credit Cards and ACH transactions, while using
                your existing Gateway provider. Give us some info,
                we handle the details, you receive the savings!
              </p>
              <Link className='button is-small' to='#'>
                <span>Learn More →</span>
              </Link>
            </div>
          </div>

          <div className="column is-6">
            <div className="content">
              <h3 className="is-size-4">
                Merchant Account + Gateway
              </h3>
              <p>
              Don’t have a gateway you’re already using? Starting from
scratch? This option is for you! Take advantage of our at
cost processing along with our at cost gateway and get
great reporting tools built in.
              </p>
              <Link className='button is-small' to='#'>
                <span>Learn More →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section className="section has-background-light">
    <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 id="two-simple-options" className="title is-size-2 is-bold-light has-text-centered">
                Features
              </h2>
              <p>
              Flexible and secure credit card processing for faith based nonprofits&mdash;with all the features you might need.
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-5 is-offset-1">
            <div className="card">
              <header className="card-header has-background-light">
                <div className="card-content">
                  <h3 className="title is-size-4">
                    Merchant Account
                  </h3>
                </div>
              </header>
              <div className="card-content content">
                <p>Secure Payment processing for Credit Card and ACH transactions</p>
                <p>Interchange Plus Pricing — Up to 50% savings</p>
                <p>Works with existing Platforms</p>
                <p>Merchant Portal w/monthly statements</p>
                <p>Next-Day Funding</p>
                <p>24/7 In-House Customer Service</p>
                <p>No Hidden Fees</p>
              </div>
              <footer class="card-footer">
              <Link className='has-background-primary has-text-white card-footer-item' to='#'>
                <span title="Get Started with a Merchant Account and Gateway option!">Choose Option →</span>
              </Link>
              </footer>
            </div>
          </div>

          <div className="column is-5">
            <div className="card">
              <header className="card-header has-background-light">
                <div className="card-content">
                  <h3 className="title is-size-4">
                    Merchant Account + Gateway
                  </h3>
                  <p className="subtitle is-size-6"><em>(Best option for the most savings!)</em></p>
                </div>
              </header>
              <div className="card-content content">
                <p><strong>Includes all the features of the merchant account PLUS:</strong></p>
                <p>Recurring Transactions</p>
                <p>Secure customer vault for payment info</p>
                <p>Enhanced Transaction Reporting</p>
                <p>iSpy FraudQuickbooks Sync (+ $5)</p>
                <p>Quick Click website Donation buttons</p>
                <p>Developer API</p>
              </div>
              <footer class="card-footer">
              <Link className='has-background-primary has-text-white card-footer-item' to='#'>
                <span title="Get Started with a Merchant Account and Gateway option!">Choose Option →</span>
              </Link>
              </footer>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section className="section">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns">
                <div className="column is-7">
                  <h3 className="is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main.image1.image}
                          alt={main.image1.alt}
                        />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main.image2.image}
                          alt={main.image2.alt}
                        />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={main.image3.image}
                        alt={main.image3.alt}
                      />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{ backgroundImage: `url(${fullImage})` }}
              />
              <h2 className="is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
)

SolutionsProcessingPageTemplate.propTypes = {
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

const SolutionsProcessingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <SolutionsProcessingPageTemplate
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

SolutionsProcessingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SolutionsProcessingPage

export const productPageQuery = graphql`
  query SolutionsProcessingPage($id: String!) {
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
