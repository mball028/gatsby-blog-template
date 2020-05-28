import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} - {node.frontmatter.date}
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const postsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
