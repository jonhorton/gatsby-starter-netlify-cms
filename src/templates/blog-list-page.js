import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { kebabCase } from 'lodash'

export default class BlogListPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <Header
          title='Blog'
          subtitle=''
          cta=''
          image=''/>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-2">Latest Entries</h1>
            </div>
            <div className="columns is-multiline">
            {posts
              .map(({ node: post }) => (
                  <div className="column is-one-third" key={post.id}>
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <Link className="has-text-primary" to={post.fields.slug}>
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                          </Link>
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h3 className="title is-size-3">
                            <Link className="has-text-primary" to={post.fields.slug}>
                              {post.frontmatter.title}
                            </Link>
                          </h3>
                          <p>
                            <small>{post.frontmatter.date}</small>
                            <span> | </span>
                            {post.frontmatter.tags.map(tag => (
                                <span><Link to={`/tags/${kebabCase(tag)}/`} key={tag + `tag`}>#{tag}</Link>&nbsp;</span>
                            ))}
                          </p>
                          <p>
                            {post.excerpt}
                            <br />
                            <br />
                            <Link className="button is-small" to={post.fields.slug}>
                              Read Article →
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

              ))}
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

BlogListPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            cta {
              ctaText
              ctaLink
              ctaType
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
