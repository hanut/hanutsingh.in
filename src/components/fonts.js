/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"

function Fonts() {

  return (
    <Helmet
      link={[
        {rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Arvo|Muli&display=swap"}
      ]}
    />
  )

}

export default Fonts
