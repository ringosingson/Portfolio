import React from "react"
import GatsbyLink from "./GatsbyLink"

function Nav() {
  return (
    <nav style={{ float: "right", marginTop: 20 }}>
      <GatsbyLink to="/" activeStyle={{ color: "#3498db" }}>
        Home
      </GatsbyLink>
      <GatsbyLink to="/projects/" activeStyle={{ color: "#3498db" }}>
        Projects
      </GatsbyLink>
      <GatsbyLink to="/contact/" activeStyle={{ color: "#3498db" }}>
        Contact
      </GatsbyLink>
    </nav>
  )
}

export default Nav
