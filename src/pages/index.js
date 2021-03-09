import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Form from "../components/form.js"
// import Display from "../components/display.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { useQuery } from "graphql-hooks"
// import FunctionClick from "../components/FunctionClick.js"
// import ClassClick from "../components/ClassClick"

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
  {
    breathe {
      quotes {
        q
        a
      }
    }
  }
  `)
  console.log(data)
  

  // function MyComponent() {
  //   const { loading, error, data } = useQuery(data, { variables: { id: 10 } })

  // if (loading) return 'Loading...'
  // if (error) return 'Something Bad Happened'

  return (  
  <Layout>
    <SEO title="Home" />
      <div className="intro">
        <h1>Welcome...</h1>
          <p>Welcome to Breathe.</p>
          <p>An app designed to take you away from countless hours of scrolling.</p>
          <p>Now...Let's begin...</p>
          <p>Follow the animation below.</p>
          <p>Inhale on expansion</p>
          <p>Exhale on compression</p>
      </div>
      <br />
      <br />
      <div className="breath">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <br />
      <br />
      <div>
        <h1>Quotes</h1>
        <h2>A few quotes while you focus on your breathing</h2>
        <table>
          <thead>
            <tr>
              <th>Quote</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {data.breathe.quotes.map((quote, index) => {
              // const {data} = quote; 
              return (
              <tr key={index}>
                <td>{quote.q}</td>
                <td>{quote.a}</td>
                {/* <FunctionClick/> */}
                {/* <ClassClick/> */}
                {/* <Form handleClickFromIndexPage={data} /> */}
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    <p>
      <Link to="/fav/">Quote Button</Link>
      <br />
      <Link to="/using-typescript/">Quote Button</Link>
    </p>
  </Layout>
  )
}
// return MyComponent()
// }



export default IndexPage
