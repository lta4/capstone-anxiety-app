// import * as React from "react";
// import { Link, useStaticQuery, graphql } from "gatsby";
// import Layout from "../components/layout";

// const quoteList = () => {
//     const data = useStaticQuery(graphql`
//     {
//       breathe {
//         quotes {
//           id
//           q
//           a
//           isChecked
//         }
//       }
//     }
//     `)
//     console.log(data)

//     return (
//         <Layout>
//             <div>
//                 <h1>My Quotes</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             {/* <th>id</th> */}
//                             <th>Quote</th>
//                             <th>Author</th>
//                             {/* <th>isChecked</th> */}
//                         </tr>
//                     </thead>
//                 <tbody>
//                 {data.breathe.quotes.map((quote, index) => (
//                     <tr key={index}>
//                     {/* <td>{quote.id}</td> */}
//                     <td>{quote.q}</td>
//                     <td>{quote.a}</td>
//                     {/* <td>{blue.isChecked}</td> */}
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </Layout>
// )
//                 }
//     export default quoteList

import React from "react";
import Layout from "../components/layout"

export default function quoteList(props) {
    console.log(props)
    let base = props.pageContext.blog
    return (
        <Layout>
            <h1>{base.q}</h1>
            <h2>{base.a}</h2>
            {/* <p
                key={`p`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: props.pageContext.blog.node.html }}
            /> */}
        </Layout>
    )
}