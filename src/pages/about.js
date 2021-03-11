import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Container from "../components/container"
import * as styles from "./about.module.css"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="Andrew's Avatar" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="aboutHead">"About Me"</h1>
    <hr />
    <Container>
      <h2 className="aboutContainer"></h2>
      <User
        username="Andrew Arias"
        avatar="https://res.cloudinary.com/dfltkqotn/image/upload/v1614972036/IMG_2031_ygt8yt.png"
        excerpt="I'm Andrew Arias. A Full Stack Developer and devoted husband and father. While taking on challenges which require a good sense of perseverance, I am able to convey my creative abilities while accomplishing any tasks. Let’s make our goals a reality."
      />
      <p className="dedication">"Dedicated to my lovely wife and son. Without whom, I would not be where I am. I love you both more than you know."</p>
      <Link to="/andrew/blog-one" className="blogOneLink">Learn More</Link>
    </Container>  
    <hr />
    <p className="aboutHardQuote">"The secret of happiness is not in doing what you like but in liking what you have to do."<br />-Sathya Sai Baba</p>
    <StaticImage
    src={`../images/mountain-lake-header.jpg`} alt="Big Mountain and Lake"
    />
    <a href="#top" className="linkHome">Back to top</a>
  </Layout>
)

export default About