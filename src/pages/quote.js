import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { render } from "react-dom"
// import ClassClick from "../components/ClassClick"

const Quote = (props) => {
  const data = useStaticQuery(graphql`
  {
    breathe {
      quotes {
        q
        a
        id
      }
    }
  }
  `)
  console.log(data)

  return (
    <Layout>
      <SEO title="Quote" />
        <h1 className="headQuote">"Inspirational Quotes"</h1>
        <hr />
          <p className="inspirationalWelcome">Thank you for enjoying "Breathe". Please enjoy a list of all our favorite quotes.</p>
          <table>
              <thead>
                <tr className="trackHead">
                  <th>Quote</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {data.breathe.quotes.map((quote, i) => {
                  return (
                    <tr key={i} className="quotes">
                      <td><a href={`/${quote.id}`} className="q">"{quote.q}"</a></td>
                      <td className="a">{quote.a}</td>
                      {/* <Click/> */}
                      {/* <ClassClick/> */}
                      {/* <Form handleClickFromIndexPage={data} /> */}
                    </tr>
                  )
              })}
              </tbody>
            </table>
          <p className="quoteHardQuote">"To improve is to change, so to be perfect is to change often." <br/>-Winston Churchill</p>
        <StaticImage
        src={`../images/lavender.jpg`} alt="Lavender" className="lavenderImage"
        />
        <Link to="/" className="linkHome">Back to Breathe</Link>
    </Layout>
  )
}

export default Quote
