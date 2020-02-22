import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeJumbo from "../components/homejumbo"


const IndexPage = () => {

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HomeJumbo />
        <section
          style={{
            margin: `0 auto`,
            textAlign: "center",
            width: "960px"
          }}>
          <h1>About Me</h1>
          <p style={{
            textAlign: "justify"
          }}>
            Experienced cloud systems architect, business analyst and tech entrepreneur. Seasoned tech lead for solutions in multiple business domains including marketing, FnB, telecom, VoIP and hospitality as well as IoT.
            <br/>
            I have almost 7 years of experience in the web and mobile development industry.
  </p>
        </section>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </>
  )
}

export default IndexPage
