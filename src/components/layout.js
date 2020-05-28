import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: "0 auto",
          maxWidth: "650px",
          paddingTop: "30px",
        }}
      >
        {children}
      </div>
    </>
  )
}
