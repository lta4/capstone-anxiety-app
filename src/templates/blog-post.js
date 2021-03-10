import React from "react";
import Layout from "../components/layout"
// import Video from "../components/video"
// import { graphql } from "gatsby"

export default function blogPost(props) {
    console.log(props)
    // const { allMarkdownRemark } = props
    // const { frontmatter, html } = allMarkdownRemark
    let base = props.pageContext.blog.node
    return (
        <Layout>
            <h1>{base.frontmatter.title}</h1>
            <h2>{base.frontmatter.date}</h2>
            <p
                key={`p`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: props.pageContext.blog.node.html }}
            />
            {/* <Video
                videoSrcURL={frontmatter.videoSrcURL}
                videoTitle={frontmatter.videoTitle}
            /> */}
        </Layout>
    )
}

// export const pageQuery = graphql`
//   {
//     allMarkdownRemark{
//         edges{
//             node{
//                 frontmatter{
//                     title
//                     author
//                     date
//                     path
//                     videoSourceURL
//                     videoTitle
//                 }
//                 html
//             }
//         }
//     }
// }
// `