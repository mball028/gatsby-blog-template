import React from "react"
import { Link } from "gatsby"

export default function Navbar(props) {
  return (
      <nav
        style={{
          backgroundColor: "skyblue",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: '0 10px 0 10px'
        }}
      >
        <Link to="/">
          <h3>{props.siteTitle}</h3>
        </Link>
        <div
          style={{
            width: "200px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
  )
}
