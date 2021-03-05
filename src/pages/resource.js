import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resource = () => (
  <Layout>
    <SEO title="Resource" />
    <h1>Hi from the fourth page</h1>
    <p>Welcome to page 4</p>
    <StaticImage
    src={`../images/mountain-lake.jpg`} alt="Mountain and Lake"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resource