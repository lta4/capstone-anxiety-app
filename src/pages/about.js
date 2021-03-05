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
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the third page</h1>
    <Header/>
    <Container>
      <h2>This is a Container Prop passed down from container.js</h2>
      <User
        username="Andrew Arias"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I am Andrew Arias. Full Stack Developer and devoted husband and father, looking to take on new challenges in a forever changing world."
      />
    </Container>  
    <p>This application was made for my lovely son and wife. "Without you both, I would be lost in a sea of... We are all we need. I love you both more than you know."</p>
    <StaticImage
    src={`../images/mountain-lake-header.jpg`} alt="Big Mountain and Lake"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


  



export default About