import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">
    <h1>Hello...</h1>
    <p>Welcome to Andrew's Gatsby site</p>
    <p>Your troubles are out the door</p>
    </div>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <div className="breath">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <p>
      <Link to="/page-2/">Link</Link> <br />
      <Link to="/using-typescript/">Link</Link>
    </p>
  </Layout>
)

export default IndexPage
