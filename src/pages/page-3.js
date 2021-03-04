import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>This application was made for my lovely son and wife. "Without you both, I would be lost in a sea of... We are all we need. I love you both more than you know."</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage