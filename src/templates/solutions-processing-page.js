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
              <h3 className="title is-size-4">
                Merchant Account
              </h3>
              <p>
                We handle the behind the scenes payment processing
                for Credit Cards and ACH transactions, while using
                your existing Gateway provider. Give us some info,
                we handle the details, you receive the savings!
              </p>
              <Link className='button is-small' to='#merchant-account-gateway'>
                <span>Keep Reading →</span>
              </Link>
            </div>
          </div>

          <div className="column is-6">
            <div className="content">
              <h3 className="title is-size-4">
                Merchant Account + Gateway
              </h3>
              <p>
              Don’t have a gateway you’re already using? Starting from
scratch? This option is for you! Take advantage of our at
cost processing along with our at cost gateway and get
great reporting tools built in.
              </p>
              <Link className='button is-small' to='#merchant-account-gateway'>
                <span>Keep Reading →</span>
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
                  <h3 id="merchant-account" className="title is-size-4">
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
              <header className="card-header has-background-link">
                <div className="card-content">
                  <h3 id="merchant-account-gateway" className="title is-size-4 has-text-light">
                    Merchant Account + Gateway
                  </h3>
                  <p className="subtitle is-size-6 has-text-light"><em>(Best option for the most savings!)</em></p>
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
          <div className="column is-8 is-offset-2">
            <div className="content">
              <h2 className="is-size-2">
                At Cost, Zero Markup = 100% Savings
              </h2>
              <p>Our Interchange + 0% Pricing allows you to maximize savings for your organization.
We will never profit from your processing fees!</p>
              <Link className='button is-primary' to='/pricing'>
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
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section has-text-centered">
              <h2 className="title is-size-2 is-bold-light has-text-centered">
                Integrations to help you work smarter
              </h2>
              <p>
              Our credit card processing solutions can integrate with many existing
software platforms, church managements systems, and payment gateways.
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-5 is-offset-2">
            <div className="content">
              <h3 className="title is-size-4">
                Supported Software &amp; Church Management Systems (ChMS)
              </h3>
                <ul>
                  <li>Rock RMS</li>
                  <li>Ministry Platform</li>
                  <li>Fellowship One</li>
                  <li>Touchpoint</li>
                  <li>Txt2Give*</li>
                  <li>SecureGive*</li>
                  <li>Shelby Arena</li>
                  <li>Brushfire Events*</li>
                  <li>Wordpress*</li>
                  <li>Wufoo*</li>
                  <li>WebConnex*</li>
                </ul>
            </div>
          </div>

          <div className="column is-5">
            <div className="content">
              <h3 className="title is-size-4">
                Supported Gateways
              </h3>
              <ul>
                <li>Authorize.net</li>
                <li>CyberSource (also used by F1)</li>
                <li>Payflow Pro</li>
                <li>NMI</li>
                <li>Transnational Gateway</li>
                <li>BeanStream</li>
                <li>Vital</li>
                <li>IATS</li>
                <li>Sage (ACH)</li>
                <li>PlugNPay (ACH)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section has-text-centered content">
              <p>
              Don’t see you platform listed? Check out our list of confirmed unsupported platforms,
and if you don&#39;t see your platform listed, send us a message and we&#39;ll check for you!
              </p>
              <Link className='button is-primary' to='/get-started'>
                <span>Get Started →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section className="section ">
    <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-2 is-bold-light has-text-centered">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
            <div className="content">
              <h4 className="title is-size-4">
                How much can I save?
              </h4>
              <p>
              Over the last six years, My Well Ministry has helped hundreds
of churches and faith based nonprofits free up over  $13,500,000 in
processing fees to go back into ministry.  On average, organizations
that use  My Well Ministry, save up to  50% (and some cases more)
off their  current credit card  processing fees!
              </p>

              <h4 className="title is-size-4">
                How long will the program last?
              </h4>
              <p>
              Contracts under our My Well Ministry have no date commitments
and do not carry any cancellation fees.  If there is ever reason for
you to discontinue our services, there are no strings attached!
              </p>

              <h4 className="title is-size-4">
                How does My Well Ministry offer these savings?
              </h4>
              <p>
              My Well Ministry provides our processing services for less than
our actual costs. This means any transactions and equipment
needed, cost you less than it costs us to provide or buy.</p>

              <p>Any fees TransNational or other payments companies typically
access for profit are removed as part of this initiative. We’re able
to save you money, allowing you to allocate funding to other areas
of need within your ministry.
              </p>

              <h4 className="title is-size-4">
              How can I see what I&#39;m currently paying
in credit card processing fees?
              </h4>
              <p>
              Contracts under our My Well Ministry have no date commitments
and do not carry any cancellation fees.  If there is ever reason for
you to discontinue our services, there are no strings attached!
              </p>
            </div>
          </div>

          <div className="column is-6">
            <div className="content">
              <h4 className="title is-size-4">
                Does my organization qualify?
              </h4>
              <p>
              If you are a religious institution and are a 501C3 organization,
you qualify to partner with My Well Ministry.</p>

<p>If you meet this criteria, get started today to start saving and
accomplishing more with your giver&#39;s contributions.
              </p>

              <h4 className="title is-size-4">
                Who is TransNational?
              </h4>
              <p>
              TransNational Payments is our payment processing partner and
industry leader in payment solutions and merchant services with
over 16 years of serving businesses nationwide.</p>

<p>They’re also recognized as being one of the most charitable and
socially responsible companies in the industry. This is why in 2009,
TransNational’s CEO and President launched My Well Ministry
as a way to give back the company’s time and expertise in order
to make its services available at less than cost to faith-based
non-profit churches & ministries.
              </p>

              <h4 className="title is-size-4">
                How is My Well funded?
              </h4>
              <p>
              My Well is funded by the success of their partner, Transnational
Payments. Rather than seeing churches and faith based based
nonprofits as another vertical market to profit from, they leverage
the success of their traditional business model to fund ministry.</p>

<p>Additionally, as a registered 501(c)3 nonprofit ourselves, we accept
donations from people and organizations who believe in our
mission. As a result, we&#39;re able to play a small part in seeing
God&#39;s kingdom come to earth.
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section has-text-centered content">
              <p>
              Visit our Help Center for more advice and answers to
common questions about us, our process, and your next step.
              </p>
              <Link className='button is-primary' to='https://help.mywell.org'>
                <span>Visit the Help Center →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section className="section has-background-primary">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="content has-text-white">
              <h2 className="is-size-2 has-text-white">
                What will you accomplish with more?
              </h2>
              <p>Sign up today to start saving your organization money with our
at cost credit & debit card processing.</p>
              <Link className='button is-invert' to='/get-started'>
                <span>Get Started →</span>
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
