import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const AboutPageTemplate = ({ title, content, subtitle, cta,image,contentComponent }) => {
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
        <div className="container content">
          <div className="columns">
            <div className="column is-4">
              <div className="section">
                <img src="http://via.placeholder.com/400x400" />
              </div>
            </div>
            <div className="column is-8">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <hr />
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">
                  Our Story
                </h2>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
                2005: Every Dollar Matters
              </h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">

                <p>In 2005 when John Pitzaferro, TransNational’s CEO, approached Willow Creek
Community Church, his home church, with an offer to give them credit card
processing services for less than his costs, he was met with skepticism and disbelief.</p>

<p>Upon analysis, those leaders found that John’s offer would save them $70,000 a year!
The experience with how much Willow was being charged from their prior processor
weighed heavily on John and the rest of the leadership team at TransNational.
They became increasingly concerned that the profits being gleaned from credit card
processing fees was taking away from money that could be used in ministry.
                </p>

            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
                2008–2009: My Well Ministry is born
              </h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">

              <p>In 2008, while at a church service, John heard Bill Hybels tell the story of a man
              whose business was drilling wells. In the winter months, when drilling ceased in
              the Midwest area of the US, this man took his business to Africa and drilled wells
              for free. The story profoundly impacted John. He realized that his well was
              payment processing.
              </p>

              <p>
              Every credit card processing company makes their money by charging a small fee
              on every transaction. John began to think: What if we decided to not charge that fee
              to ministries and faith based nonprofits?
              </p>

              <p>
              In 2009, John officially launched My Well Ministry, for churches and faith based
              non profits to steward their dollars well, allowing them to have greater
              Kingdom impact.
              </p>

            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
                2009–2017: Investing in Kingdom impact
              </h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">

              <p>Since then, hundreds of churches and 501c3 nonprofits across the country have
              partnered with My Well to put money back into their mission. Collectively, these
              organizations have saved over $13,500,000, freeing up much needed capital that
              has been used for ministry and kingdom purposes.</p>

              <p>Through these savings we’ve been able to see amazing things like:</p>

                <ul>
                  <li>Orphans being given meals</li>
                  <li>Addicts being served in recovery</li>
                  <li>A single mom receiving a home</li>
                  <li>People finding their purpose</li>
                  <li>The gospel being shared more widely</li>
                </ul>


              <p>And those are only the stories we’ve about! For each of these, there are countless
              others whose lives have been impacted through the organizations partnered with
              My Well Ministry.
              </p>

            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
                2017: Payments, not profits
              </h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">

              <p>After speaking at the Global Leadership Summit in August of 2017, John Pitzaferro
had an increasing passion to do more, and established a vision to save nonprofits
$20,000,000 by 2020. (Watch John’s talk.)</p>

<p>We believe in ministry so much, that we officially became a 501(c)3 nonprofit in the
fall of 2017. We wanted to take our commitment to never turning a profit one step further,
by ensuring our organization was setup for the benefit of our customers.</p>

<p>Our desire is that this step will allow us to both protect and serve the ministries partnered
with us, by showing that while we serve organizations through credit card processing, </p>
our vision is not profit.


            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
                2018 and beyond: A grander vision
              </h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">

              <p>We strongly believe that as followers of Jesus, we can take part in a grander vision to
impact the world for good. Rather than follow the traditional business model of seeing
churches and faith based nonprofits as just another market to profit from, we believe
that business leaders can change the status quo by offering their services to nonprofits
either at cost or for free. We believe this is possible by leveraging the profits from other
markets to fund ministry work.</p>

<p>And we’ve got big plans for Kingdom Mischief in 2018. Not content simply continue on
our past trajectory, we’ve invested significant time and resources into new and innovative
work to make it easier for organizations to facilitate giving in the digital world, while still
leveraging My Well Ministry’s at cost credit processing.</p>

<p>We’re really excited to tell you more in the coming months, but if you’d like to be the first
to know about our new innovations (And maybe even be a part of beta testing them),
you can subscribe here.
              </p>

            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <hr />
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">
                  How does it work?
                </h2>
                </div>
              </div>
            </div>


            <div className="columns">
              <div className="column is-8 is-offset-2">

                <p>We often get questions like: How are you funded? How do I know you won’t raise my rates?
Or Is this too good to be true?</p>

<p>Our goal isn&#39;t to make a profit, but rather, to take the success God has given us, and use it to
give back to churches and faith based nonprofits.</p>

<p>We invest a portion of the success from our for-profit business, Transnational Payments back
into My Well Ministry. We want to serve you in this way, helping your ministry grow by freeing
up money that would otherwise go toward credit card processing fees.</p>

<p>Since our inception, My Well Ministry has distinguished itself by offering Interchange plus 0%
pricing. We have never made a profit from the money processed through our organization, and
we never will. We even took some time to outline How Much My Well Costs, showing a
transparent breakdown of where fees are going.</p>

<p>We pass 100% of these savings onto your ministry, so you can free up more money
for ministry work.
                </p>

              </div>
            </div>

            <div className="columns">
              <div className="column is-10 is-offset-1">
                <hr />
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">
                    What&#39;s your well?
                  </h2>
                  </div>
                </div>
              </div>


              <div className="columns">
                <div className="column is-8 is-offset-2">

                  <p>For us, My Well Ministry is the answer to the question: What is God’s grander vision for me?</p>

<p>What is that endeavor God has given you success in? What is that gift He&#39;s placed within you?
We believe that the world changes as people leverage their gifts for the benefit of God&#39;s kingdom.
We all want to be a part of something bigger than ourselves, but the more you try to satisfy that
thirst with self interest, the more disillusioned you will become.</p>

<p>What is that step you need to take to shift your direction and make a lasting, kingdom impact?</p>

<p>What is that thing buried in the back of your mind you&#39;ve been putting off? </p>

<p>What would it look like if you paused long enough to answer the question: "What is my well?"</p>

<p>As you wrestle with the answers to those questions and begin to take steps toward putting those
answers into action, we believe your life will have greater purpose and meaning, and countless
others will be impacted by your faith.</p>

<p>While we started this page to tell you more about My Well Ministry, the reality is that the My Well
story is your story too. Our hope is that you will be inspired to take steps of faith to pursue those
things that God is calling you to do. And it starts by having the courage to answer these questions:</p>

<p><strong>What is your well?</strong></p>

<p><strong>What is God’s grander vision for your life?</strong></p>

                </div>
              </div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      cta={post.frontmatter.cta}
      image={post.frontmatter.image}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
