import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Click from "../components/click.js"
import Video from "../components/video"

const IndexPage = (props) => {

  return (  
  <Layout>
    <SEO title="Home" />
      <div className="intro">
        <h1 className="headWelcome">Welcome...</h1>
          <div className="divWelcome">
            <p>Welcome to Breathe.</p>
            <p>An app designed to take you away from countless hours of scrolling and bring you back to your inner self</p>
            <p>Please play this relaxing video to start your journey</p>
            <section>
            <Video
            videoSrcURL="https://youtube.com/embed/Hg1-NHJ7-sY"
            videoTitle="Official Music Video on YouTube"
            className="thirtyMin"
            />
            </section>
            <p>Now... let's begin</p>
            <p>Follow the animation provided below</p>
            <p>Remember, to "inhale" and "exhale"</p>
          </div>
      </div>
        <hr />
        <br />
        <br />
      {/* <Click/> */}
      {/* <button>Activate Animation</button> */}
      <div className="breath">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      {/* <Click/> */}
        <br />
        <br />
        <br />
        <hr />
      <p className="indexHardQuote">"By the practice of meditation, you will find that you are carrying within your heart a portable paradise"<br />-Paramahansa</p>
    </Layout>
  )
}
export default IndexPage
