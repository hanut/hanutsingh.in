import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomeJumbo = () => {
  const techstackImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tech-stack.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Img fluid={techstackImage.placeholderImage.childImageSharp.fluid} />
      <Img fluid={techstackImage.placeholderImage.childImageSharp.fluid} />
    </>
  )
}

export default HomeJumbo
