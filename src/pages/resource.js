import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resource = () => (
  <Layout>
    <SEO title="Resource" />
    <h1 className="headResource">"Helpful Resources!"</h1>
    <hr />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="resource">
      <h3>If you or know of anyone who may be in need of help, resources and staff agencies are always available. Do Not Hesitate to reach out.</h3>
        <ul>
          <li><a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Anxiety-Disorders" target="_blank" className="resourceLinks">Nami</a>
          </li>
          <li><a href="https://www.everydayhealth.com/anxiety/guide/resources/" target="_blank" className="resourceLinks">EverydayHealth</a>
          </li>
          <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html" target="_blank" className="resourceLinks">CDC</a>
          </li>
          <li><a href="https://www.aacap.org/AACAP/Families_and_Youth/Resource_Centers/Anxiety_Disorder_Resource_Center/Home.aspx" target="_blank" className="resourceLinks">AACAP</a>
          </li>
          <li><a href="https://childmind.org/topics/concerns/anxiety/" target="_blank" className="resourceLinks">Childmind</a>
          </li>
        </ul>
    </div>
      <p className="resourceHardQuote">"If you correct your mind, the rest of your life will fall into place."	<br />-Lao Tzu</p>
    <StaticImage
    src={`../images/mountain-lake.jpg`} alt="Mountain and Lake"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resource