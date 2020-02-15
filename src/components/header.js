import { Link } from "gatsby"
import React from "react"
import HeaderLogo from "./header-logo";

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
            fontWeight: `300`
          }}
        >
          anut S. Gusain
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
