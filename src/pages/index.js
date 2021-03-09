import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Form from "../components/form.js"
// import Display from "../components/display.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useQuery } from "graphql-hooks"
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
  

  // const MyComponent = () => {
  //   console.log("MyComponent", MyComponent)
  //   const { loading, error, data } = useQuery(data)
  //   if (loading) return 'Loading...'
  //   if (error) return 'Something Bad Happened'

  // const [quoteID, setQuoteID] = useState(1);
  
  return (  
  <Layout>
    <SEO title="Home" />
      <div className="intro">
        <h1 className="headWelcome">Welcome...</h1>
          <div className="divWelcome">
            <p>Welcome to Breathe.</p>
            <p>An app designed to take you away from those countless hours of scrolling</p>
            <p>Now...Let's begin...</p>
            <p>Follow the animation below</p>
            <p>Inhale and Exhale</p>
          </div>
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
        <h1 className="introQuotes">Quotes</h1>
        <h2 className="detailQuotes">Read a quote. Choose your favorite.</h2>
        <table>
          <thead>
            <tr>
              <th>Quote</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {data.breathe.quotes.map((quote, i, q, a) => {
              const list = [data];
              // console.log(list.indexOf("quotes"))
              // const myData = data[Math.floor(Math.random() * data.length)]
              // console.log("myData", myData)
              return (
              <tr key={i}>
                {/* <td>{`${myData} ${quote.q} ${quote.a}`}</td> */}
                <td>{quote.q}</td>
                <td>{quote.a}</td>
                {/* <FunctionClick/> */}
                {/* <ClassClick/> */}
                {/* <Form handleClickFromIndexPage={data} /> */}
              </tr>
              )
          })}
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
