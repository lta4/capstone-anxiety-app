import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Fav = () => (
  <Layout>
    <SEO title="Fav" />
    <h1 className="headFav">"Your Favorites"</h1>
    <hr />
    <p>Thank you for enjoying "Breathe". Please enjoy a list of all your favorite quotes.</p>
    <p className="favHardQuote">"To improve is to change, so to be perfect is to change often." <br/>-Winston Churchill</p>
    <StaticImage
    src={`../images/lavender.jpg`} alt="Lavender"
    />
    <Link to="/" className="linkHome">Breathe</Link>
  </Layout>
)

export default Fav
