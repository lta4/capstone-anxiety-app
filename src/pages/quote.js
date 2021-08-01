import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
// import { render } from "react-dom"

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
          <p className="inspirationalWelcome">Thank you for enjoying "Breathe". Please enjoy a list of all our favorite quotes. Don't forget to listen to some medatative music provided below.</p>
          <Video
            videoSrcURL="https://youtube.com/embed/tqG-RTyJOjg"
            videoTitle="Official Music Video on YouTube"
          />
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
                      <td>
                        <a href={`/${quote.id}`} className="q">"{quote.q}"</a>
                      </td>
                      <td>
                        <a href={`/${quote.id}`} className="a">{quote.a}</a>
                      </td>
                      {/* <Click/> */}
                    </tr>
                  )
              })}
              </tbody>
            </table>
          <div className="quoteOverlay">
            <StaticImage
            src={`../images/lavender.jpg`} alt="Lavender" className="lavenderImage"
            />
            <p className="quoteHardQuote">"To improve is to change, so to be perfect is to change often." <br/>-Winston Churchill</p>
          </div>
        <a href="#top" className="linkHome">Back to top</a>
    </Layout>
  )
}

export default Quote
