import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderLogo = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 25) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    `)

    return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
}

export default HeaderLogo
