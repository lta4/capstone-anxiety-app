import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... thats ok! You can overcome anything. Let's keep looking, shall we?</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
      <p>In the meantime, you're welcome!</p>
    </section>
  </Layout>
)

export default NotFoundPage
