import { Link } from "gatsby"
import React from "react"
import HeaderLogo from "./header-logo";

import "./layout.css"

const Header = () => (
  <header>
    <div className="flexbox">
      <HeaderLogo></HeaderLogo>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Hanut S. Gusain
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
