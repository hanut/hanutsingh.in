import { Link } from "gatsby"
import React from "react"
import HeaderLogo from "./header-logo";

const Header = () => (
  <header>
    <div className="flexbox">
      <HeaderLogo/>
      <h1>
        <Link
          to="/"
          title="Hanut Singh Gusain"
        >
          anut S. Gusain
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
