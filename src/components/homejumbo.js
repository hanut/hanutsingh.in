import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const HomeJumbo = () => {
  const { bgImage, avatar, techStack } = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "ts-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 180) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      techStack: file(relativePath: { eq: "tech-stack.png" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 720) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <BackgroundImage
        Tag="div"
        fluid={bgImage.childImageSharp.fluid}
        backgroundColor={`#000000`}
        style={{
          textAlign: "center",
          overflow: "hidden"
        }}
      >
        <Img fluid={avatar.childImageSharp.fluid}
          style={{
            height: "175px",
            width: "175px",
            margin: `1rem auto`
          }}
        />
        <Img fluid={techStack.childImageSharp.fluid}
          style={{
            maxWidth: "720px",
            minWidth: "420px",
            width: "75%",
            margin: `0 auto`,
            marginTop: "2rem",
            marginBottom: "1rem"
          }}
        />
      </BackgroundImage>
    </>
  )
}

export default HomeJumbo
