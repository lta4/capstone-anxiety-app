import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    breathe {
      quotes {
        id
        q
        a
        isChecked
      }
    }
  }
  `)
  console.log(data)
  return (  
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
    <Layout>
      <div>
        <h1>My Quotes</h1>
        <table>
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th>Quote</th>
              <th>Author</th>
              {/* <th>isChecked</th> */}
            </tr>
          </thead>
          <tbody>
            {data.breathe.quotes.map((quote, index) => (
              <tr key={index}>
                {/* <td>{quote.id}</td> */}
                <td>{quote.q}</td>
                <td>{quote.a}</td>
                {/* <td>{blue.isChecked}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
    <div className="breath">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    <p>
      <Link to="/fav/">Quote Button</Link>
      <br />
      <Link to="/using-typescript/">Quote Button</Link>
    </p>
  </Layout>
  )
}

export default IndexPage
