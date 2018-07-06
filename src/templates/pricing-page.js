import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Link from 'gatsby-link'
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
      <section className="section has-background-light">
        <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 id="two-simple-options" className="title is-size-2 is-bold-light has-text-centered">
                    Pricing Options
                  </h2>
                  <p>
                    Because we value transparency in our pricing, we&#39;ve done our best to itemize the actual costs you&#39;ll pay when signing up for any of the My Well Ministry credit card processing options.
                    This Interchange + 0% pricing means that we only pass on the costs from the major credit card companies (Visa, Mastercard, Discover, Amex, etc). Your organization will receive 100% of the savings!
                  </p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-5 is-offset-1">
              <h3 className="is-size-3">
                Merchant Account
              </h3>
              <p className="content">Easy, no hassle change.
                We handle the behind the scenes payment processing
                for Credit Cards and ACH transactions, while using your existing Gateway provider.
                Give us some info, we handle the details, you receive the savings!</p>
                <div className="card">
                  <header className="card-header has-background-light">
                    <div className="card-header-title">
                      <h3 id="merchant-account" className="title is-size-4">
                        Monthly Fees
                      </h3>
                    </div>
                  </header>
                  <div className="card-content content">
                      <p><strong>$7</strong> &ndash; Statement Fee<br/>
                        <strong>10¢</strong> &ndash; Batch Fee <small>(2 per day on average)</small></p>

                  </div>
                </div>
                <div className="card">
                  <header className="card-header has-background-light">
                    <div className="card-header-title">
                      <h3 id="merchant-account" className="title is-size-4">
                        Per Transaction Fees
                      </h3>
                    </div>
                  </header>
                  <div className="card-content content">
                      <p><strong>1.5 Basis Points</strong> (.015%) <br/>
                          <small>This equals out to $1.50 per $10,000 processed (covers a cost called Bin Clearance)</small></p>
                      <p><strong>$.05 per transaction</strong> <br/>
                          <small>(covers TransNational&#39;s cost to process on the Global Network)</small></p>
                  </div>
                </div>
                <div className="card">
                  <header className="card-header has-background-light">
                    <div className="card-header-title">
                      <h3 id="merchant-account" className="title is-size-4">
                        Totals
                      </h3>
                    </div>
                  </header>
                  <div className="card-content">
                    <p className="content"><strong>$7+</strong> per month</p>
                    <p><strong>1.75% + 5¢</strong> per transaction</p>
                </div>
                  <footer class="card-footer">
                  <Link className='has-background-primary has-text-white card-footer-item' to='/get-started?type=merchant-account'>
                    <span title="Get Started with a Merchant Account!">Choose Option →</span>
                  </Link>
                  </footer>
                </div>
              </div>

              <div className="column is-5">
              <h3 className="is-size-3">
                Merchant Account + Gateway = ❤️
              </h3>
              <p className="content">Don’t have a gateway you’re already using? Starting from scratch? This option is for you!
Take advantage of our at cost processing along with our at cost gateway and get great
 reporting tools built in.</p>
                <div className="card">
                  <header className="card-header has-background-light">
                    <div className="card-header-title">
                      <h3 id="merchant-account" className="title is-size-4">
                        Monthly Fees
                      </h3>
                    </div>
                  </header>
                  <div className="card-content content">
                      <p><strong>$7</strong> &ndash; Statement Fee</p>
                      <p><strong>10¢</strong> &ndash; Batch Fee <small>(2 per day on average)</small></p>
                      <p><strong>$6</strong> &ndash; Gateway Fee</p>
                      <p><strong>$5</strong> &ndash; Customer Vault Fee* <small>(Recurring Donations)</small><br/>
                        + <small><strong>$0.05</strong> per vault item</small></p>
                      <p><strong>$20</strong> &ndash; ACH/eCheck Fee*</p>

                      <p><small><em>*Optional Feature</em></small></p>
                  </div>
                </div>
                <div className="card">
                  <header className="card-header has-background-light">
                    <div className="card-header-title">
                      <h3 id="merchant-account" className="title is-size-4">
                        Per Transaction Fees
                      </h3>
                    </div>
                  </header>
                  <div className="card-content">
                      <p className="content"><strong>1.5 Basis Points</strong> (.015%) <br/>
                          <small>This equals out to $1.50 per $10,000 processed (covers a cost called Bin Clearance)</small></p>
                      <p className="content"><strong>$.05 per transaction</strong> <br/>
                          <small>(covers TransNational&#39;s cost to process on the Global Network)</small></p>
                      <p className="content"><strong>$0.06 per credit/debit card transaction</strong> <br/>
                        <small>(The first 100 are free)</small></p>
                      <p><strong>$0.25 per ACH transaction</strong></p>

                  </div>
                </div>
                <div className="card">
                  <header className="card-header has-background-light">
                    <div className="card-header-title">
                      <h3 id="merchant-account" className="title is-size-4">
                        Totals
                      </h3>
                    </div>
                  </header>
                  <div className="card-content">
                    <p className="content"><strong>$38+</strong> per month</p>
                    <p className="content"><strong>Credit Card: 1.75% + 11¢</strong> per transaction</p>
                    <p><strong>Bank Account: 0% + 30¢</strong> per transaction</p>
                </div>
                  <footer class="card-footer">
                  <Link className='has-background-primary has-text-white card-footer-item' to='/get-started?type=merchant-account-gateway'>
                    <span title="Get Started with a Merchant Account!">Choose Option →</span>
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
                  <h2 className="is-size-2">
                    Merchant Account
                  </h2>
                  <p className="content">Easy, no hassle change.
We handle the behind the scenes payment processing
for Credit Cards and ACH transactions, while using your existing Gateway provider.
Give us some info, we handle the details, you receive the savings!</p>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="card">
                    <header className="card-header has-background-light">
                      <div className="card-header-title">
                        <h4 id="merchant-account" className="title is-size-5">
                          Monthly Fees
                        </h4>
                      </div>
                    </header>
                    <div className="card-content">
                      <ul>
                        <li><strong>$7</strong> &ndash; Statement Fee</li>
                        <li><strong>10¢</strong> &ndash; Batch Fee <br/><small>(2 per day on average)</small></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <header className="card-header has-background-light">
                      <div className="card-header-title">
                        <h4 id="merchant-account" className="title is-size-5">
                          Transaction Fees
                        </h4>
                      </div>
                    </header>
                    <div className="card-content content">

                        <p><strong>1.5 Basis Points</strong> (.015%)<br/>
                          <small>This equals out to $1.50 per $10,000 processed (covers a cost called Bin Clearance)</small></p>
                        <p><strong>$.05 per transaction</strong> <br />
                          <small>(covers TransNational&#39;s cost to process on the Global Network)</small></p>

                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="card">
                    <header className="card-header has-background-light">
                      <div className="card-header-title">
                        <h4 id="merchant-account" className="title is-size-5">
                          Totals
                        </h4>
                      </div>
                    </header>
                    <div className="card-content">
                        <p>Average effective rate per transaction is 1.75% + 5¢</p>
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
        </div>
      </section>
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
