import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resource = () => (
  <Layout>
    <SEO title="Resource" />
    <h1>Helpful Resources</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="resource">
      <h2>If you need any help, someone is always available.</h2>
      <table>
        <thead>
          <tr>
            <th>links</th>
            <th>more</th>
          </tr>
        </thead>
      <tbody>
      <tr>
      <td>https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Anxiety-Disorders</td>
      <br />
      <td>https://www.everydayhealth.com/anxiety/guide/resources/</td>
      <br />
      <td>https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html</td>
      <br />
      <td>https://www.aacap.org/AACAP/Families_and_Youth/Resource_Centers/Anxiety_Disorder_Resource_Center/Home.aspx</td>
      <br />
      <td>https://childmind.org/topics/concerns/anxiety/</td>
      </tr>
      </tbody>
      </table>
    </div>
    <StaticImage
    src={`../images/mountain-lake.jpg`} alt="Mountain and Lake"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resource